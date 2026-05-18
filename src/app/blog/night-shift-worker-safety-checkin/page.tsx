import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Night Shift Worker Safety: Why Check-Ins Matter on Irregular Schedules — SafeCheck",
  description: "Night shift workers face unique safety risks. Irregular hours, isolation, and disrupted routines. A flexible check-in system helps.",
};

export default function Page() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">Night Shift Worker Safety: Why Check-Ins Matter</h1>
      <p className="text-zinc-400 text-sm mb-8">May 19, 2026</p>
      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>20% of the global workforce works non-standard hours. Healthcare workers, security guards, factory operators, truck drivers — millions of people are awake and working while the rest of the world sleeps. Night shift work is linked to higher rates of accidents, health issues, and isolation. A flexible check-in system addresses the safety gap.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">The Unique Risks of Night Work</h2>
        <p>Reduced staffing means fewer people to notice if something goes wrong. Fatigue impairs judgment. Disrupted circadian rhythms increase health risks. And working when friends and family are asleep means your natural support network is offline when you need it most.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">How a Check-In System Helps</h2>
        <p>A digital check-in works on YOUR schedule — not a 9-to-5 one. Set your check-in time to when your shift starts or ends. If you don't confirm within the grace period, your designated contact gets alerted. A night shift worker finishing at 3 AM can set their check-in for 3:15 AM — and their daytime contact will get the alert when they wake up.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Simple Setup</h2>
        <p>SafeCheck adapts to any schedule. Set your time. Add a contact who understands your shift pattern. That's it. One click when you're done for the night — or when you wake up — proves you made it through.</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <p className="font-semibold text-zinc-900 mb-2">Set your check-in to YOUR schedule. Free.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">Set Up SafeCheck</Link>
        </div>
      </div>
    </article>
  );
}
