import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Best Gift for Aging Parents: Peace of Mind (Not Another Sweater) — DailyPing",
  description: "Skip the sweater this year. A daily safety check-in is the gift your aging parents actually need — and it's free to set up.",
};

export default function Page() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">The Best Gift for Aging Parents: Peace of Mind</h1>
      <p className="text-zinc-400 text-sm mb-8">May 19, 2026</p>
      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>Every year, we buy our parents sweaters, books, gadgets. They smile, say thank you, and the gift collects dust. This year, give them something that actually matters: the knowledge that someone will know if something goes wrong.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">What Aging Parents Actually Worry About</h2>
        <p>Not loneliness. Not boredom. It's the fear of falling and lying there for days with no one knowing. It's the anxiety of "what if something happens and I can't reach the phone." A daily check-in system removes that fear entirely — and it costs nothing.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">How to Give It</h2>
        <p>Don't frame it as "monitoring." Frame it as "letting me worry less." Set it up together over coffee. You enter their email, set a morning check-in time, add yourself as the emergency contact. They receive one email a day. One click. That's it.</p>
        <p>The gift isn't the technology — it's the conversation. "I love you enough to make sure someone always knows you're okay." No sweater can compete with that.</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <p className="font-semibold text-zinc-900 mb-2">Set it up for someone you love. Free. 60 seconds.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">Set Up DailyPing</Link>
        </div>
      </div>
    </article>
  );
}
