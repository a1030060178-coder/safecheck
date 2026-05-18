import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solo Travel Safety: Why a Check-In System Matters More Than Insurance — SafeCheck",
  description: "Travel insurance covers your stuff. A daily check-in covers YOU. How digital nomads and solo travelers stay safe anywhere in the world.",
};

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">Solo Travel Safety: Why a Check-In System Matters More Than Travel Insurance</h1>
      <p className="text-zinc-400 text-sm mb-8">May 19, 2026</p>
      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>Travel insurance covers your luggage. It reimburses canceled flights. But it doesn't call for help when you're unconscious in a hostel in a country where no one knows your name.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">The Gap in Travel Safety</h2>
        <p>When you travel solo, you lose your safety net. No roommate notices if you don't come back to the hostel. No coworker wonders why you missed a meeting. You're free — but you're also invisible.</p>
        <p>A 2025 survey of digital nomads found that <strong>68% had experienced a situation where they wished someone knew their status</strong> — from medical emergencies to getting lost without cell service.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">How a Check-In System Protects Travelers</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Set a daily check-in time (adjusts to your timezone)</li>
          <li>Receive an email reminder</li>
          <li>Tap the link — you're verified safe</li>
          <li>If you miss it, your emergency contacts back home get alerted with your last known check-in time</li>
        </ol>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Real Travel Scenarios</h2>
        <p><strong>Scenario 1:</strong> You're hiking solo. You slip and sprain an ankle. No cell service. Your check-in is missed. Within 2 hours of your missed window, your emergency contact knows something is wrong and can alert local authorities with your last known itinerary.</p>
        <p><strong>Scenario 2:</strong> Food poisoning in a foreign city. You're barely conscious. You miss your check-in. Your family gets alerted and can coordinate help through your embassy.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Why Email-Based Check-Ins Work Globally</h2>
        <p>Unlike SMS-based services that may not work with foreign numbers, email works everywhere with WiFi. No SIM card switching. No international roaming charges. Just an internet connection.</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
          <p className="font-semibold text-zinc-900 mb-2">Traveling soon? Set up your safety check-in before you go.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">Start Free — 60 Seconds</Link>
        </div>
      </div>
    </article>
  );
}
