import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — DailyPing Daily Safety Check-In",
  description: "Frequently asked questions about DailyPing. How it works, pricing, privacy, and more.",
};

const faqs = [
  { q: "How does DailyPing work?", a: "Set a daily check-in time. We email you at that time with a one-click link. Click the link to confirm you're safe. If you miss your window + grace period, we automatically alert your emergency contacts." },
  { q: "Is DailyPing really free?", a: "Yes. The free tier includes 1 daily check-in and 1 emergency contact. Pro ($5/month) adds unlimited check-ins, 5 contacts, SMS alerts, and activity history." },
  { q: "What happens if I miss a check-in?", a: "First, we send you a reminder email. If you still don't respond within your grace period (default 2 hours), we send an alert to all your emergency contacts with your last known check-in time." },
  { q: "Will you call 911 or emergency services?", a: "No. DailyPing is not an emergency response service. We only notify the emergency contacts you designate. You are responsible for ensuring your contacts are willing and able to check on you." },
  { q: "Is my data secure?", a: "Yes. We use Supabase with encryption at rest and in transit. We don't sell data, run ads, or use tracking cookies. Your email and check-in history are private." },
  { q: "Can I change my check-in time?", a: "Yes. Bookmark your dashboard link (sent in your welcome email). You can change your check-in time, grace period, and emergency contacts anytime." },
  { q: "What if I'm in a different timezone?", a: "Check-in times are currently set in UTC. Support for timezone selection is coming soon to the dashboard." },
  { q: "Does it work on mobile?", a: "Yes. DailyPing is a web app — it works on any device with a browser and internet connection. No app download needed." },
  { q: "How do I cancel?", a: "Free accounts can be abandoned at any time. Pro subscribers can cancel via the Paddle customer portal. We don't lock you in." },
  { q: "Who built DailyPing?", a: "A solo developer who lives alone and wanted peace of mind. Built over a weekend for $0 using Next.js, Supabase, and Resend. Open source on GitHub." },
];

export default function FAQPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">Frequently Asked Questions</h1>
      <p className="text-zinc-500 mb-10">Everything you need to know about DailyPing.</p>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <details key={i} className="border border-zinc-200 rounded-xl p-5 group">
            <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
              {faq.q}
              <span className="text-zinc-300 group-open:hidden">+</span>
              <span className="text-zinc-300 hidden group-open:inline">−</span>
            </summary>
            <p className="mt-3 text-zinc-600 text-sm leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/" className="inline-block bg-zinc-900 text-white rounded-lg px-6 py-3 font-medium hover:bg-zinc-800 transition">
          Try DailyPing Free
        </Link>
      </div>
    </div>
  );
}
