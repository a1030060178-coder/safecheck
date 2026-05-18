import { getSupabaseAdmin } from "@/lib/supabase";
import { getResend } from "@/lib/resend";
import { getCheckinUrl } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Protect cron endpoint
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get current time in UTC
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM
    const today = now.toISOString().split("T")[0];

    console.log(`[CRON] Running check at ${currentTime} UTC for ${today}`);

    // Find all users whose check-in time is within the last 5 minutes
    // and who haven't checked in today
    const { data: usersToCheck, error } = await getSupabaseAdmin()
      .from("users")
      .select("id, email, unique_token, check_in_time, grace_period_minutes")
      .lte("check_in_time", currentTime)
      .gte(
        "check_in_time",
        new Date(now.getTime() - 10 * 60 * 1000)
          .toTimeString()
          .slice(0, 5)
      );

    if (error || !usersToCheck) {
      console.error("[CRON] Error fetching users:", error);
      return NextResponse.json({ checked: 0, errors: 1 });
    }

    let alerts = 0;
    let reminders = 0;

    for (const user of usersToCheck) {
      // Check if already checked in today
      const { data: existingCheckin } = await getSupabaseAdmin()
        .from("check_ins")
        .select("id")
        .eq("user_id", user.id)
        .eq("date", today)
        .maybeSingle();

      if (existingCheckin) {
        continue; // Already checked in today
      }

      const gracePeriod = user.grace_period_minutes || 120;
      const checkInTimeParts = user.check_in_time.split(":");
      const checkInDate = new Date();
      checkInDate.setHours(parseInt(checkInTimeParts[0]));
      checkInDate.setMinutes(parseInt(checkInTimeParts[1]));
      checkInDate.setSeconds(0);

      const cutoffTime = new Date(checkInDate.getTime() + gracePeriod * 60 * 1000);

      if (now > cutoffTime) {
        // Past grace period — ALERT emergency contacts
        const { data: contacts } = await getSupabaseAdmin()
          .from("emergency_contacts")
          .select("email, name")
          .eq("user_id", user.id);

        if (contacts) {
          for (const contact of contacts) {
            await getResend().emails.send({
              from: "SafeCheck Alerts <alerts@resend.dev>",
              to: [contact.email],
              subject: `⚠️ ${user.email} missed their safety check-in`,
              html: `
                <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
                  <h2>⚠️ Missed Check-In Alert</h2>
                  <p><strong>${user.email}</strong> was supposed to check in at <strong>${user.check_in_time}</strong> but didn't.</p>
                  <p>Their grace period has now passed. Please try to reach them.</p>
                  <hr style="border:none;border-top:1px solid #e4e4e7;margin:24px 0;" />
                  <p style="color:#666;font-size:12px;">
                    This is an automated alert from SafeCheck. If you believe this is a false alarm,
                    the user may have checked in late or there may be a system delay.
                  </p>
                </div>
              `,
            });
          }
          alerts++;
        }
      } else {
        // Within grace period — send reminder to user
        const checkinUrl = getCheckinUrl(user.unique_token);
        await getResend().emails.send({
          from: "SafeCheck <checkin@resend.dev>",
          to: [user.email],
          subject: "⏰ Reminder: Your SafeCheck is waiting",
          html: `
            <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
              <h2>⏰ Quick check-in reminder</h2>
              <p>You haven't checked in today yet. Click below to confirm you're okay:</p>
              <p>
                <a href="${checkinUrl}" style="display:inline-block;background:#18181b;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">
                  I'm OK
                </a>
              </p>
              <p style="color:#666;font-size:14px;">
                You have until <strong>${cutoffTime.toLocaleTimeString()}</strong> before we alert your emergency contacts.
              </p>
            </div>
          `,
        });
        reminders++;
      }
    }

    console.log(`[CRON] Done. Alerts: ${alerts}, Reminders: ${reminders}`);
    return NextResponse.json({
      checked: usersToCheck.length,
      alerts,
      reminders,
    });
  } catch (err) {
    console.error("[CRON] Error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
