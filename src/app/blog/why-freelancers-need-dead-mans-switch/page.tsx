import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Freelancers Need a Dead Man's Switch — SafeCheck",
  description: "Freelancers work alone. If something happens, clients don't know. A daily check-in protects your business AND your life.",
};

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">Why Every Freelancer Needs a Dead Man's Switch</h1>
      <p className="text-zinc-400 text-sm mb-8">May 19, 2026</p>
      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>You work alone. No coworkers. No boss checking if you showed up. If something happens to you, your clients won't know until their project deadline passes — and by then, damage is done. A dead man's switch protects your business as much as your life.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">The Freelancer's Invisible Risk</h2>
        <p>When you're a full-time employee, someone notices if you don't show up within hours. When you're a freelancer, you could be incapacitated for <strong>days</strong> before anyone suspects something is wrong. Clients assume you're busy. Friends assume you're in deep-work mode.</p>
        <p>During those lost days: deadlines get missed, client trust erodes, invoices go unsent, ongoing projects stall. The business damage compounds simultaneously with the personal emergency.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">The Business Case for a Check-In</h2>
        <p>A daily safety check-in isn't just personal protection — it's business continuity. If you miss your check-in, your emergency contact can: notify key clients, pause ongoing campaigns, and protect your professional reputation while you recover.</p>
        <p>Think of it as insurance for your freelance business. Except it's free, takes 3 seconds a day, and doesn't require underwriting.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Setup Takes 60 Seconds</h2>
        <p>Set your daily check-in time (morning, before work starts). Add an emergency contact who knows your client list. That's it. One click a day proves you're operational. If you miss it, your contact steps in.</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <p className="font-semibold text-zinc-900 mb-2">Protect your business and yourself. Free.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">Set Up SafeCheck</Link>
        </div>
      </div>
    </article>
  );
}
