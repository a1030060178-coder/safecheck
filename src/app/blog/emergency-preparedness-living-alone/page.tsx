import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Preparedness for Solo Living: A 30-Minute Setup Guide — SafeCheck",
  description: "Prepare for emergencies when you live alone. Fire, medical, natural disaster — a 30-minute checklist that could save your life.",
};

export default function PostPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">Emergency Preparedness for Solo Living: 30-Minute Setup</h1>
      <p className="text-zinc-400 text-sm mb-8">May 19, 2026</p>
      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>When you live alone, you're your own first responder. There's no one else to grab the fire extinguisher, call 911, or check if you're breathing. This guide takes 30 minutes to read and act on — and it could save your life.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Minute 0-5: ICE Contacts</h2>
        <p>Add "ICE" (In Case of Emergency) contacts to your phone. Paramedics are trained to look for these. Add at least two — one local, one remote. Include their relationship to you in the contact name: "ICE - Mom" or "ICE - James (neighbor)."</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Minute 5-10: Medical Info Card</h2>
        <p>Write on a notecard: your name, blood type, allergies, medications, and emergency contacts. Put it in your wallet behind your ID. In an emergency where you can't speak, this card speaks for you. Take a photo of it too — keep it in your phone's favorites.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Minute 10-15: Fire Safety Check</h2>
        <p>Test your smoke detector. Right now. Check the fire extinguisher (under kitchen sink, not in a closet). Know two ways out of your apartment. Walk the escape route once. In a real fire, you have about 2 minutes.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Minute 15-20: First Aid Kit</h2>
        <p>Keep it somewhere obvious — under the kitchen sink, not buried in a bathroom cabinet. Include: bandages, antiseptic, pain relievers, any personal medications, emergency blanket, flashlight. Guests and first responders should be able to find it without asking.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Minute 20-25: Emergency Water & Food</h2>
        <p>Three days of water (1 gallon per day) and non-perishable food. Canned goods + manual can opener. Protein bars. This isn't prepper territory — it's basic insurance for power outages, storms, or being snowed in.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Minute 25-30: Digital Safety Net</h2>
        <p>Set up a daily check-in. SafeCheck sends you an email every day — one click confirms you're okay. If you miss it, your emergency contacts get alerted. It's the only item on this list that actively monitors your status rather than waiting to be used.</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <p className="font-semibold text-zinc-900 mb-2">Last step: set up your automated check-in. 60 seconds.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">Set Up SafeCheck Free</Link>
        </div>
      </div>
    </article>
  );
}
