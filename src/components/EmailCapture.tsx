"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function EmailCapture() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed && !submitted) setShow(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, [dismissed, submitted]);

  if (!show) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        checkInTime: "09:00",
        contactEmail: email,
      }),
    });
    setSubmitted(true);
    setShow(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in slide-in-from-bottom-4">
      <div className="bg-zinc-900 text-white rounded-2xl p-6 shadow-2xl border border-zinc-700">
        <button
          onClick={() => { setShow(false); setDismissed(true); }}
          className="absolute top-3 right-3 text-zinc-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
        <h3 className="font-bold text-lg mb-1">Stay Safe. It's Free.</h3>
        <p className="text-zinc-400 text-sm mb-4">
          Set up your daily check-in in 60 seconds. One click a day proves you're okay.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            className="w-full bg-amber-400 text-zinc-900 rounded-lg py-2.5 font-semibold text-sm hover:bg-amber-300 transition"
          >
            Set Up My Free Check-In
          </button>
        </form>
        <p className="text-zinc-500 text-xs mt-3 text-center">
          No credit card. No spam. Just peace of mind.
        </p>
      </div>
    </div>
  );
}
