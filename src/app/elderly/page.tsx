import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Check-In for Elderly Parents — SafeCheck",
  description: "Non-intrusive daily safety check-ins for aging parents living alone. They check in with one click. You get peace of mind. Free to start.",
};

export default function ElderlyPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">Peace of Mind for Families with Aging Parents</h1>
      <p className="text-zinc-500 text-lg mb-8">
        A simple daily check-in that respects their independence while giving you confidence they're okay.
      </p>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-10">
        <p className="font-medium text-emerald-800 text-lg mb-2">The Problem</p>
        <p className="text-emerald-700">
          Mom lives alone. You call every day — but sometimes she doesn't answer. Is she in the garden? Taking a nap? Or has something happened? The uncertainty is exhausting.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">How SafeCheck Helps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="border border-zinc-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-amber-500 mb-2">1</p>
          <p className="font-semibold mb-1">One Click</p>
          <p className="text-sm text-zinc-500">They click a link in their daily email. No apps. No passwords.</p>
        </div>
        <div className="border border-zinc-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-amber-500 mb-2">2</p>
          <p className="font-semibold mb-1">You Stay Informed</p>
          <p className="text-sm text-zinc-500">If they miss a check-in, you get an automatic alert. No more guessing.</p>
        </div>
        <div className="border border-zinc-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-amber-500 mb-2">3</p>
          <p className="font-semibold mb-1">Non-Intrusive</p>
          <p className="text-sm text-zinc-500">They keep their independence. You keep your peace of mind.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">How to Set It Up for a Parent</h2>
      <ol className="list-decimal pl-5 space-y-3 text-zinc-700 mb-10">
        <li>Visit the SafeCheck signup page</li>
        <li>Enter <strong>their email</strong> (or yours if they don't use email — you'll receive the alerts)</li>
        <li>Set a daily check-in time (morning works best)</li>
        <li>Add <strong>your email</strong> as the emergency contact</li>
        <li>Forward them the welcome email with their check-in link</li>
        <li>Help them bookmark the link on their phone or computer</li>
      </ol>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="font-semibold text-zinc-900 mb-3">Set up in 60 seconds. Free. No credit card.</p>
        <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-8 py-3 font-medium hover:bg-zinc-800 transition">
          Get Started
        </Link>
      </div>
    </div>
  );
}
