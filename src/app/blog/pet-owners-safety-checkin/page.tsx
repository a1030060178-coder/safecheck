import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Owners Living Alone: Why Your Pet Can't Be Your Only Safety Net — SafeCheck",
  description: "Pets provide comfort but they can't call for help. Why solo pet owners need a human backup system — and how to set one up in 60 seconds.",
};

export default function Page() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-amber-600 text-sm hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">Pet Owners Living Alone: Why Your Pet Can't Be Your Only Safety Net</h1>
      <p className="text-zinc-400 text-sm mb-8">May 19, 2026</p>
      <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700 leading-relaxed">
        <p>Your dog is your best friend. Your cat keeps you company. But neither of them can dial 911. For solo livers with pets, a disturbing scenario unfolds: if something happens to you, not only are you at risk — your pet is trapped with no food, no water, and no way out. A digital check-in protects BOTH of you.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">The Pet Emergency Gap</h2>
        <p>Animal welfare organizations report a growing number of cases where pets were found alone with deceased owners — sometimes after days or weeks. The pet couldn't call for help. The owner's emergency contacts didn't know to check. A simple daily check-in could have changed the outcome for both human and animal.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Include Pet Info in Emergency Contacts</h2>
        <p>When you set up your check-in, add a note for your emergency contacts: "I have a dog named Max. If you get an alert, please make sure someone checks on him too. His food is in the pantry, and my neighbor Sarah at #3B has a spare key." This small addition could save your pet's life.</p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">Peace of Mind for Pet Parents</h2>
        <p>Knowing someone will check on BOTH of you removes the low-grade anxiety that every solo pet owner feels. You focus on walks, treats, and belly rubs — not the "what ifs."</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <p className="font-semibold text-zinc-900 mb-2">Protect yourself AND your pet. Free setup.</p>
          <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">Set Up SafeCheck</Link>
        </div>
      </div>
    </article>
  );
}
