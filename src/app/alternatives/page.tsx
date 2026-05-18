import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SafeCheck vs Alternatives — Best Daily Check-In App Compared",
  description:
    "Compare SafeCheck with Snug Safety, CheckOnMe, and other wellness check services. See which daily check-in app is best for solo living.",
};

const alts = [
  {
    name: "Snug Safety",
    price: "Free / $9.99/mo Premium",
    pros: "SMS check-ins, simple interface",
    cons: "No email-only option, limited international support, iOS-first",
    safecheck: "Email + SMS, works globally, web-based (any device)",
  },
  {
    name: "CheckOnMe",
    price: "$4.99/mo",
    pros: "Phone call check-ins, human-operated",
    cons: "US only, limited to business hours, more intrusive",
    safecheck: "$0 free tier, automated 24/7, non-intrusive email, global",
  },
  {
    name: "Kith + Kin",
    price: "$9.99/mo",
    pros: "Family-focused, care coordination features",
    cons: "Overkill for single users, expensive for what it does",
    safecheck: "Simple single-user focus, free tier, no unnecessary features",
  },
  {
    name: "Manual Text Check-In",
    price: "Free",
    pros: "No app needed, personal",
    cons: "People forget, text chains get buried, no escalation logic",
    safecheck: "Automated reminders, smart escalation, never forgets",
  },
];

export default function AlternativesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">
        SafeCheck vs Alternatives
      </h1>
      <p className="text-zinc-500 mb-10">
        Looking for the best daily check-in app? Here's how SafeCheck compares
        to other wellness check services.
      </p>

      <div className="space-y-6 mb-12">
        {alts.map((alt) => (
          <div
            key={alt.name}
            className="border border-zinc-200 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">{alt.name}</h2>
              <span className="text-sm text-zinc-400">{alt.price}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-zinc-400 mb-1">What they offer</p>
                <p className="text-zinc-600">{alt.pros}</p>
                <p className="text-red-500 text-xs mt-2">{alt.cons}</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-3">
                <p className="font-medium text-amber-700 mb-1">SafeCheck wins</p>
                <p className="text-zinc-700">{alt.safecheck}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Start free. Stay safe.</h2>
        <p className="text-zinc-300 mb-6">
          No credit card. No app to install. Works on any device, anywhere in the world.
        </p>
        <Link
          href="/"
          className="inline-block bg-amber-400 text-zinc-900 rounded-lg px-8 py-3 font-semibold hover:bg-amber-300 transition"
        >
          Set Up SafeCheck Now
        </Link>
      </div>

      <p className="text-xs text-zinc-400 mt-8 text-center">
        Last updated: May 2026. Pricing may have changed. Verify on vendor websites.
      </p>
    </div>
  );
}
