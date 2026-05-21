import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "College Student Safety: 8 Essential Tools for Campus Living — DailyPing",
  description: "Safety essentials every college student should have: from check-in apps to campus escort services. Stay safe without being paranoid.",
};

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">College Student Safety: 8 Essential Tools</h1>
      <p className="text-zinc-400 text-sm mb-8">May 19, 2026</p>
      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>First time living away from home? Whether you're in a dorm, off-campus apartment, or studying abroad, these 8 safety tools should be on every student's phone. Most are free.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">1. Daily Check-In (Free)</h2>
        <p>A quick daily check-in tells your parents or roommate you're okay without a long conversation. DailyPing sends you an email, you click once, done. If you miss it, they get notified. Especially important if you live alone off-campus.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">2. Campus Safety App (Free)</h2>
        <p>Most universities have a safety app with emergency buttons, campus escort requests, and real-time alerts. Download it during orientation and actually open it once — know where the emergency button is before you need it.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">3. Location Sharing (Free)</h2>
        <p>Share your real-time location with at least one trusted friend. Not for surveillance — for "I'm walking home from the library at midnight and want someone to know my route."</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">4. Portable Door Lock ($15)</h2>
        <p>Works on any inward-opening door. Essential for off-campus apartments, Airbnbs during spring break, and questionable hotel rooms on road trips.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">5. Rideshare Verification</h2>
        <p>Always check the license plate, make, and model before getting in. Share your ride with a friend. Uber and Lyft both have in-app safety features — use them.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">6. Emergency Contacts on Lock Screen</h2>
        <p>Add ICE contacts to your phone's lock screen. Takes 30 seconds. If you're incapacitated, first responders check for this.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">7. Power Bank</h2>
        <p>A dead phone means no maps, no rides, no emergency calls. Keep a small power bank in your backpack. Always.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">8. Trust Your Gut</h2>
        <p>No app replaces intuition. If a situation feels wrong, leave. Don't override your instincts to be polite. Your safety &gt; everyone else's comfort.</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <p className="font-semibold text-zinc-900 mb-2">Start with #1. Free. Your parents will sleep better.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">Set Up DailyPing</Link>
        </div>
      </div>
    </article>
  );
}
