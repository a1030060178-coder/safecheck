import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remote Work Isolation: How a Daily Check-In Protects Mental Health — DailyPing",
  description: "Remote workers face unique mental health risks from isolation. A simple daily check-in routine can be a lifeline. Here's the research and how to start.",
};

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">Remote Work Isolation: How a Daily Check-In Protects Mental Health</h1>
      <p className="text-zinc-400 text-sm mb-8">May 19, 2026</p>
      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>Remote work promised freedom. For many, it delivered isolation. A 2025 Buffer survey found that <strong>23% of remote workers cite loneliness as their #1 struggle</strong> — ahead of communication, motivation, and work-life balance.</p>
        <p>The fix isn't going back to an office. It's building better daily routines that anchor you to the world outside your apartment.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">The Invisible Toll of Working Alone</h2>
        <p>When you commute to an office, you have built-in social touchpoints: the barista, the elevator neighbor, the coworker who always microwaves fish. These micro-interactions aren't trivial — they're guardrails. They prove the world outside your head still exists.</p>
        <p>Remote workers lose all of this. Days blur together. Monday feels like Thursday. You realize you haven't spoken to another human in 48 hours. That's not freedom — that's drift.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">How a Daily Check-In Helps</h2>
        <p>A daily check-in is deceptively simple, but it creates three things remote workers desperately need:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Structure.</strong> The check-in becomes a daily anchor — like a morning commute, but 99% shorter.</li>
          <li><strong>Accountability.</strong> Someone knows if you're okay. In deep isolation, that knowledge is grounding.</li>
          <li><strong>Connection.</strong> The check-in itself isn't social, but knowing someone would notice your absence creates a thread of connection.</li>
        </ol>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">The Research</h2>
        <p>Studies consistently show that <strong>social connection is the #1 predictor of happiness and longevity</strong> — more than exercise, diet, or income. The Harvard Study of Adult Development (85+ years running) found that the quality of your relationships at age 50 is the best predictor of your health at age 80.</p>
        <p>A daily check-in isn't a replacement for deep relationships. But it's a floor — a minimum viable connection that ensures you never drop entirely off the map.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Start Today</h2>
        <p>Set a time. Any time. 9 AM. 10 AM. Whenever you start your workday. One click. That's it. You've told the world: <em>I'm here. I'm okay.</em></p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <p className="font-semibold text-zinc-900 mb-2">Start your daily check-in routine. Free. No commitment.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">Set Up DailyPing</Link>
        </div>
      </div>
    </article>
  );
}
