import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Check on Elderly Parents Remotely Without Being Overbearing — SafeCheck",
  description: "Practical, respectful ways to monitor aging parents from afar. Digital check-in tools, smart home sensors, and communication strategies that preserve dignity.",
};

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">How to Check on Elderly Parents Remotely (Without Being Overbearing)</h1>
      <p className="text-zinc-400 text-sm mb-8">May 19, 2026</p>
      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>Your mom lives alone. You live 200 miles away. You want to make sure she's okay — but you don't want to become the overbearing child who calls three times a day. Here's how to strike the balance.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">1. Start with a Conversation</h2>
        <p>Before installing any technology, have the talk. "Mom, I worry about you — not because I think you can't handle things, but because I love you. Can we set up a simple system so I don't worry as much?" Frame it as reducing YOUR anxiety, not managing HER life. It works better.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">2. Automated Check-Ins (The Gold Standard)</h2>
        <p>A daily check-in app like SafeCheck sends an email every morning. She clicks once. That's it. If she misses it, you get notified. This is the least intrusive method — no cameras, no microphones, no "monitoring." Just a one-click confirmation that she's up and okay. Free for basic use.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">3. Smart Home Sensors (Minimal Intrusion)</h2>
        <p>Motion sensors in common areas (living room, kitchen) can tell you if there's been activity today — without cameras. Refrigerator sensors can show if meals are being eaten. These work in the background. Your parent doesn't need to do anything.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">4. The Weekly "Real" Call</h2>
        <p>Automation handles the daily "are you alive" check. This frees up your actual calls to be about life, not logistics. Instead of "did you eat today," you can ask "what did you read this week." The quality of your connection improves when the basic safety check is automated.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">5. Emergency Backup Plan</h2>
        <p>Know their neighbors. Exchange phone numbers with at least one person nearby. If you get an alert that your parent missed their check-in, you call the neighbor, not 911. This is faster, less traumatic, and usually resolves the issue (they were in the garden, phone died, etc.).</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <p className="font-semibold text-zinc-900 mb-2">Set up a free daily check-in for your parent. 60 seconds.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">Start SafeCheck Free</Link>
        </div>
      </div>
    </article>
  );
}
