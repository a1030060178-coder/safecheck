"use client";

import { useState } from "react";
import { Shield, Clock, Bell, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { EmailCapture } from "@/components/EmailCapture";

export default function HomePage() {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const body = {
      email: fd.get("email"),
      checkInTime: fd.get("checkInTime"),
      contactEmail: fd.get("contactEmail"),
      contactName: fd.get("contactName"),
    };

    const res = await fetch("/api/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setStep("success");
    } else {
      const err = await res.json();
      toast.error(err.error || "Something went wrong");
    }
    setLoading(false);
  }

  if (step === "success") {
    return (
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
            <Check className="w-7 h-7 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold mb-3">You're all set!</h1>
          <p className="text-zinc-600 mb-6">
            Check your email. We sent you a link to your personal check-in page.
            Bookmark it — that's where you'll check in every day.
          </p>
          <p className="text-sm text-zinc-400">
            First reminder arrives at your scheduled time tomorrow.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <header className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm mb-6">
          <Shield className="w-4 h-4" />
          Trusted by people living alone worldwide
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Never go unnoticed.
        </h1>
        <p className="text-xl text-zinc-500 max-w-lg mx-auto mb-8">
          One click a day proves you're okay. If you miss it, we alert the
          people you trust.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm text-left space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              Your email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Daily check-in time
            </label>
            <input
              name="checkInTime"
              type="time"
              defaultValue="09:00"
              required
              className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Emergency contact email
            </label>
            <input
              name="contactEmail"
              type="email"
              required
              placeholder="trusted@friend.com"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Their name (optional)
            </label>
            <input
              name="contactName"
              type="text"
              placeholder="Mom / Best friend"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-zinc-900 text-white rounded-lg py-3 font-medium hover:bg-zinc-800 transition flex items-center justify-center gap-2"
          >
            {loading ? "Setting up..." : "Start Protecting Yourself"}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
          <p className="text-xs text-zinc-400 text-center">
            Free. No credit card required. Cancel anytime.
          </p>
        </form>
      </header>

      <section className="max-w-3xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Clock className="w-8 h-8 text-amber-500 mx-auto mb-3" />
          <h3 className="font-semibold mb-1">Daily Reminder</h3>
          <p className="text-sm text-zinc-500">
            We email you at your chosen time. One click to check in.
          </p>
        </div>
        <div className="text-center">
          <Bell className="w-8 h-8 text-amber-500 mx-auto mb-3" />
          <h3 className="font-semibold mb-1">Smart Escalation</h3>
          <p className="text-sm text-zinc-500">
            Miss your check-in? We alert your emergency contacts.
          </p>
        </div>
        <div className="text-center">
          <Shield className="w-8 h-8 text-amber-500 mx-auto mb-3" />
          <h3 className="font-semibold mb-1">Peace of Mind</h3>
          <p className="text-sm text-zinc-500">
            Your loved ones sleep better knowing you're okay.
          </p>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-200 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Simple pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-lg mx-auto">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 text-left">
              <h3 className="font-semibold text-lg mb-1">Free</h3>
              <p className="text-3xl font-bold mb-4">
                $0<span className="text-base font-normal text-zinc-400">/mo</span>
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> 1 daily check-in
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> 1 emergency contact
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Email alerts
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 text-white rounded-2xl p-6 text-left ring-2 ring-amber-400">
              <h3 className="font-semibold text-lg mb-1">Pro</h3>
              <p className="text-3xl font-bold mb-4">
                $5<span className="text-base font-normal text-zinc-400">/mo</span>
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" /> Unlimited check-ins
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" /> 5 emergency contacts
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" /> SMS alerts
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" /> Activity history
                </li>
              </ul>
              <a
                href="https://ko-fi.com/penn662500"
                target="_blank"
                className="mt-6 block w-full bg-amber-400 text-zinc-900 rounded-lg py-2.5 font-semibold hover:bg-amber-300 transition text-center"
              >
                Support on Ko-fi — $5/mo
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-zinc-400">
        DailyPing &copy; 2026 &mdash; Because someone should know.
      </footer>
      <EmailCapture />
    </div>
  );
}
