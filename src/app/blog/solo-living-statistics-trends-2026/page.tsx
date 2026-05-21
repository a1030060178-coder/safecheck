import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solo Living Statistics 2026: 125M+ and Growing — DailyPing",
  description: "The definitive collection of solo living statistics for 2026. Demographics, trends, risks, and what it means for personal safety.",
};

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">Solo Living Statistics 2026: The Numbers Behind the Trend</h1>
      <p className="text-zinc-400 text-sm mb-8">May 19, 2026</p>
      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>Solo living is the fastest-growing household type worldwide. Here are the numbers that define the trend — and what they mean for personal safety.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Global Snapshot</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>125M+ people</strong> live alone worldwide</li>
          <li><strong>29% of US households</strong> are single-person — up from 13% in 1960</li>
          <li><strong>China projects 200M</strong> one-person households by 2030</li>
          <li><strong>Sweden, Norway, Denmark:</strong> 40%+ single-person households</li>
          <li><strong>Japan:</strong> 35% single-person households, rising fastest among elderly women</li>
        </ul>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Demographics</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Fastest growing segment: <strong>women aged 55+</strong></li>
          <li>Second fastest: <strong>young professionals aged 25-34</strong></li>
          <li><strong>68% of digital nomads</strong> travel solo</li>
          <li><strong>90% of seniors</strong> want to age in place rather than move to assisted living</li>
        </ul>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">The Safety Gap</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Solo livers are discovered <strong>2-7 days later</strong> after a medical emergency vs. those living with others</li>
          <li><strong>62% of solo livers</strong> report occasional anxiety about "what if something happens"</li>
          <li>Only <strong>12%</strong> have any automated check-in system in place</li>
          <li><strong>Fall-related deaths</strong> among solo elderly are 3x higher due to delayed discovery</li>
        </ul>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">The Opportunity</h2>
        <p>With 125M+ people living alone and only 12% using any safety system, there's an enormous gap between risk and protection. A free daily check-in takes 60 seconds to set up and closes that gap completely.</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <p className="font-semibold text-zinc-900 mb-2">Join the 12% who are protected. Start free.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">Set Up DailyPing</Link>
        </div>
      </div>
    </article>
  );
}
