import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Everyone Living Alone Needs a Daily Check-In System — DailyPing",
  description:
    "Over 125 million people live alone worldwide. A simple daily check-in could save your life. Learn how to set one up in 60 seconds.",
};

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mb-2">
        Why Everyone Living Alone Needs a Daily Check-In System
      </h1>
      <p className="text-zinc-400 text-sm mb-8">May 18, 2026</p>

      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>
          More than <strong>125 million people</strong> live alone worldwide. In the US alone,
          single-person households now make up <strong>29% of all homes</strong> — up from just
          13% in 1960. The solo living trend is accelerating, but our safety infrastructure
          hasn't caught up.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">The Silent Risk</h2>
        <p>
          When you live with roommates or family, someone notices if you don't come home.
          Someone knocks on your door if you sleep through your alarm. Someone calls an
          ambulance if you collapse in the hallway.
        </p>
        <p>
          When you live alone, there is no backup system. A fall in the shower, a sudden
          medical event, or even something as simple as slipping on ice — nobody knows until
          it's too late.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">A Simple Solution</h2>
        <p>
          A <strong>daily safety check-in</strong> is the simplest, most effective way to
          protect yourself. Here's how it works:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Set a daily check-in time (e.g., 9:00 AM)</li>
          <li>Receive a reminder email at that time</li>
          <li>Click the link to confirm you're okay</li>
          <li>If you miss your window, your emergency contact gets alerted</li>
        </ol>
        <p>That's it. One click per day. Total effort: under 3 seconds.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">
          Why Not Just Text a Friend?
        </h2>
        <p>
          You can. But people forget. Friends get busy. Text chains get buried. An automated
          system doesn't forget, doesn't get busy, and escalates reliably when something is
          wrong.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Set Up Yours Today</h2>
        <p>
          DailyPing is free for basic protection. One daily check-in. One emergency contact.
          No credit card required. Set it up in 60 seconds.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
          <p className="font-semibold text-zinc-900 mb-2">Ready to protect yourself?</p>
          <Link
            href="/"
            className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition"
          >
            Set Up DailyPing — Free
          </Link>
        </div>
      </div>
    </article>
  );
}
