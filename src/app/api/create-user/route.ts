import { getSupabaseAdmin } from "@/lib/supabase";
import { generateToken } from "@/lib/utils";
import { getResend } from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, checkInTime, contactEmail, contactName } =
      await request.json();

    if (!email || !checkInTime || !contactEmail) {
      return NextResponse.json(
        { error: "Email, check-in time, and emergency contact are required." },
        { status: 400 }
      );
    }

    const token = generateToken();

    // Create user
    const { error: userError } = await getSupabaseAdmin().from("users").insert({
      email,
      unique_token: token,
      check_in_time: checkInTime,
      tier: "free",
    });

    if (userError) {
      return NextResponse.json(
        { error: "Failed to create account. Email may already be registered." },
        { status: 400 }
      );
    }

    // Get the user ID
    const { data: user } = await getSupabaseAdmin()
      .from("users")
      .select("id")
      .eq("unique_token", token)
      .single();

    // Create emergency contact
    await getSupabaseAdmin().from("emergency_contacts").insert({
      user_id: user!.id,
      email: contactEmail,
      name: contactName || null,
    });

    // Send welcome email with check-in link
    const checkinUrl = `${process.env.NEXT_PUBLIC_APP_URL}/checkin/${token}`;
    const dashboardUrl = `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/${token}`;

    await getResend().emails.send({
      from: "DailyPing <noreply@resend.dev>",
      to: [email],
      subject: "Your DailyPing is ready — bookmark this link",
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
          <h2>🛡️ Your DailyPing is live</h2>
          <p>You're now protected. Here's what you need to know:</p>
          <p><strong>Your daily check-in link (BOOKMARK THIS):</strong></p>
          <p>
            <a href="${checkinUrl}" style="display:inline-block;background:#18181b;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">
              Check In Now
            </a>
          </p>
          <p style="color:#666;font-size:14px;">
            We'll email you every day at <strong>${checkInTime}</strong> with this link.<br/>
            Click it once a day. If you miss your window, your emergency contact gets notified.
          </p>
          <p style="color:#666;font-size:14px;">
            Manage settings: <a href="${dashboardUrl}">${dashboardUrl}</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, token });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
