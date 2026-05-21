import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Living Alone Safety Guide: 15 Essential Tips + Digital Tools (2026) — DailyPing",
  description: "Complete safety guide for solo livers. Physical security, digital tools, emergency preparedness, and the #1 habit that could save your life.",
};

export default function LivingAlonePage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">Living Alone Safety: The Complete 2026 Guide</h1>
      <p className="text-zinc-500 text-lg mb-8">15 essential safety tips for solo livers — from physical security to digital safety nets.</p>

      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>Living alone is freedom. But it also means you're your own first responder. No roommate to notice you didn't come home. No partner to call 911. Just you.</p>
        <p>This guide covers everything: door security, digital safety nets, emergency prep, and the one daily habit that could save your life.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Physical Security</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Deadbolt + chain latch on every exterior door.</strong> A locked doorknob takes 5 seconds to bypass. A deadbolt takes 5 minutes.</li>
          <li><strong>Window locks + security film.</strong> Ground-floor windows are the #1 entry point. Security film ($10) makes glass shatter-proof.</li>
          <li><strong>Doorbell camera.</strong> See who's at the door before opening it. $25 buys peace of mind.</li>
          <li><strong>Timed lights.</strong> Smart plugs turn lights on/off on a schedule. Looks occupied even when you're away.</li>
        </ol>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Digital Safety Nets</h2>
        <ol className="list-decimal pl-5 space-y-2" start={5}>
          <li><strong>Daily check-in system.</strong> One click a day proves you're okay. DailyPing emails you at your chosen time — click the link, done. Miss your window, your emergency contact gets alerted automatically.</li>
          <li><strong>Location sharing.</strong> Share your real-time location with a trusted contact. Google Maps or Find My — pick one and turn it on permanently.</li>
          <li><strong>Emergency SOS setup.</strong> iPhone: press side button 5 times. Android: power button 3 times. Configure it now — not during an emergency.</li>
        </ol>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Emergency Preparedness</h2>
        <ol className="list-decimal pl-5 space-y-2" start={8}>
          <li><strong>First aid kit.</strong> Not in the bathroom cabinet where guests can't find it. Under the kitchen sink. Labeled.</li>
          <li><strong>Fire extinguisher + escape plan.</strong> Know two ways out. Walk the route once. In a fire, you have 2 minutes.</li>
          <li><strong>ICE contacts.</strong> "In Case of Emergency" in your phone contacts. Paramedics are trained to look for it.</li>
          <li><strong>Spare key strategy.</strong> Never under the mat. Give it to a trusted neighbor. Or use a keypad lock.</li>
        </ol>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Health Habits</h2>
        <ol className="list-decimal pl-5 space-y-2" start={12}>
          <li><strong>Stay hydrated. Move daily.</strong> Dehydration and inactivity amplify every health risk. Drink water. Walk 20 minutes.</li>
          <li><strong>Know your neighbors.</strong> Exchange phone numbers with at least one person in your building. You don't need to be friends — just mutual safety contacts.</li>
          <li><strong>Trust your gut.</strong> If something feels wrong, it probably is. Don't override your instincts to be polite.</li>
        </ol>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">The #1 Solo Living Safety Habit</h2>
        <p>All the locks, cameras, and first aid kits in the world won't help if <strong>no one knows something is wrong</strong>. A daily check-in is the only safety measure that actively bridges the gap between "everything's fine" and "something happened."</p>
        <p>It takes 3 seconds a day. That's less time than brushing your teeth. And it could be the difference between being found in 2 hours versus 2 days.</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <p className="font-semibold text-zinc-900 mb-2">Set up your daily safety check-in. Free. 60 seconds.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">Start Now</Link>
        </div>
      </div>
    </article>
  );
}
