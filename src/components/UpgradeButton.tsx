"use client";

import { usePaddle } from "@/lib/paddle";

export function UpgradeButton({ email }: { email: string }) {
  const paddle = usePaddle();

  function handleUpgrade() {
    if (!paddle) return;
    paddle.Checkout.open({
      items: [
        {
          priceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_ID!,
          quantity: 1,
        },
      ],
      customer: { email },
      settings: {
        displayMode: "overlay",
        theme: "light",
      },
    });
  }

  return (
    <button
      onClick={handleUpgrade}
      disabled={!paddle}
      className="w-full bg-amber-400 text-zinc-900 rounded-lg py-3 font-semibold hover:bg-amber-300 transition disabled:opacity-50"
    >
      {paddle ? "Upgrade to Pro — $5/month" : "Loading..."}
    </button>
  );
}
