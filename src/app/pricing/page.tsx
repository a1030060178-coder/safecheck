import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — SafeCheck Daily Check-In Service",
  description: "SafeCheck pricing: Free tier for basic protection, Pro at $5/month for unlimited. No hidden fees. Cancel anytime.",
};

export default function PricingPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-3">Simple, Transparent Pricing</h1>
      <p className="text-zinc-500 mb-12">Start free. Upgrade when you need more.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
        <div className="border border-zinc-200 rounded-2xl p-8 text-left">
          <h2 className="text-xl font-bold mb-2">Free</h2>
          <p className="text-4xl font-bold mb-6">$0<span className="text-base font-normal text-zinc-400">/forever</span></p>
          <ul className="space-y-2 text-sm text-zinc-600 mb-6">
            <li>✓ 1 daily check-in</li>
            <li>✓ 1 emergency contact</li>
            <li>✓ Email alerts</li>
            <li>✓ Works globally</li>
            <li>✓ No credit card</li>
          </ul>
          <Link href="/" className="block text-center bg-zinc-900 text-white rounded-lg py-3 font-medium hover:bg-zinc-800 transition">Get Started Free</Link>
        </div>
        <div className="border-2 border-amber-400 bg-zinc-900 text-white rounded-2xl p-8 text-left">
          <h2 className="text-xl font-bold mb-2">Pro</h2>
          <p className="text-4xl font-bold mb-6">$5<span className="text-base font-normal text-zinc-400">/month</span></p>
          <ul className="space-y-2 text-sm text-zinc-300 mb-6">
            <li>✓ Unlimited check-ins</li>
            <li>✓ 5 emergency contacts</li>
            <li>✓ SMS alerts</li>
            <li>✓ Activity history</li>
            <li>✓ Priority support</li>
          </ul>
          <a href="https://ko-fi.com/penn662500" target="_blank" className="block w-full bg-amber-400 text-zinc-900 rounded-lg py-3 font-semibold hover:bg-amber-300 transition text-center">
            Support on Ko-fi — $5/mo
          </a>
        </div>
      </div>
    </div>
  );
}
