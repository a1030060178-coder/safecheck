import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Modern Dead Man's Switch — DailyPing",
  description:
    "From analog keyholders to AI-powered check-in apps, here's how safety check-ins have evolved and which one is right for your lifestyle.",
};

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mb-2">The Modern Dead Man's Switch</h1>
      <p className="text-zinc-400 text-sm mb-8">May 18, 2026</p>

      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>
          The concept of a "dead man's switch" dates back to train conductors — a pedal they
          had to keep pressed to prove they were conscious. If their foot slipped off, the
          train would automatically brake.
        </p>
        <p>
          Today, the same principle applies to solo living. A <strong>digital dead man's switch</strong> is
          a system that automatically alerts someone if you fail to check in. In the age of
          remote work and single-person households, it's becoming as essential as a smoke
          detector.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Option 1: The Friend Agreement</h2>
        <p>The OG method. You agree with a friend to text each other every morning. Pros: free,
        personal. Cons: unreliable. People forget. Conversations drift into "how was your
        weekend?" territory. And if your friend is traveling or busy, the system breaks.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Option 2: Professional Calling Services</h2>
        <p>Companies that call you daily to check in. A real human calls. If you don't answer,
        they try again, then escalate. Cons: expensive ($30-$100+/month), intrusive, and
        tied to business hours.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Option 3: Automated Check-In Apps</h2>
        <p>Apps like DailyPing send you a daily email or push notification. You click once.
        If you don't respond within your grace period, your designated emergency contacts
        get alerted automatically. Pros: cheap (free or $5/month), reliable, non-intrusive.
        Cons: requires an internet connection.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Which Should You Choose?</h2>
        <p>For most solo livers, an automated app is the sweet spot. It's always on, never
        forgets, costs almost nothing, and respects your privacy. Use the friend method as
        a backup — a two-layer safety system is always better than one.</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
          <p className="font-semibold text-zinc-900 mb-2">Set up your digital dead man's switch in 60 seconds.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">
            Start Free — DailyPing
          </Link>
        </div>
      </div>
    </article>
  );
}
