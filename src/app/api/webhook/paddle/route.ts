import { getSupabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const event = JSON.parse(body);

    const eventType = event.event_type;
    const email = event.data?.customer_email || event.data?.email;

    console.log(`[Paddle Webhook] ${eventType} for ${email}`);

    switch (eventType) {
      case "subscription.created":
      case "transaction.completed": {
        if (email) {
          const subId = event.data?.subscription_id || event.data?.id;
          await getSupabaseAdmin()
            .from("users")
            .update({
              tier: "pro",
              stripe_subscription_id: subId,
            })
            .eq("email", email);
        }
        break;
      }

      case "subscription.canceled":
      case "subscription.past_due": {
        const subId = event.data?.subscription_id || event.data?.id;
        if (subId) {
          await getSupabaseAdmin()
            .from("users")
            .update({ tier: "free", stripe_subscription_id: null })
            .eq("stripe_subscription_id", subId);
        }
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[Paddle Webhook] Error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
