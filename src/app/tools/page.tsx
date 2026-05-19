import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tools by Penn — Privacy-First, No Signup Required",
  description: "7 free tools built for solo livers, freelancers, developers, and creators. All browser-based. No tracking. No ads. Support on Ko-fi.",
};

const tools = [
  { name: "SafeCheck", desc: "Daily safety check-in for solo living. One click proves you're okay.", url: "https://safecheck-omega.vercel.app", price: "Free / $5 Pro", icon: "🛡️" },
  { name: "ADHD Flow", desc: "Focus timer built for neurodivergent minds. Body doubling mode.", url: "https://focustimer-flame.vercel.app", price: "Free / $4 Pro", icon: "🧠" },
  { name: "AI CSV Cleaner", desc: "Clean CSV files in your browser. AI scans for data issues automatically.", url: "https://csvcleaner-pi.vercel.app", price: "Free", icon: "📊" },
  { name: "PropWatch", desc: "Track when clients open your proposals. Section-by-section analytics.", url: "https://proposaltracker.vercel.app", price: "Free / $15 Pro", icon: "👁️" },
  { name: "Case Converter", desc: "Convert text between 10 case formats instantly.", url: "https://caseconverter-five.vercel.app", price: "Free", icon: "🔤" },
  { name: "Passgen", desc: "Cryptographically secure password generator. All in your browser.", url: "https://passgen-green.vercel.app", price: "Free", icon: "🔐" },
  { name: "URL Tool", desc: "Encode/decode URLs, Base64, and HTML entities.", url: "https://urltool-eta.vercel.app", price: "Free", icon: "🔗" },
];

export default function ToolsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Free Tools by Penn</h1>
        <p className="text-zinc-500 text-lg mb-4">
          7 privacy-first tools. All browser-based. No signup. No ads.
        </p>
        <a
          href="https://ko-fi.com/penn662500"
          target="_blank"
          className="inline-flex items-center gap-2 bg-amber-400 text-zinc-900 rounded-full px-6 py-2.5 font-semibold hover:bg-amber-300 transition"
        >
          ☕ Support All Tools — $5/mo on Ko-fi
        </a>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            className="border border-zinc-200 rounded-xl p-5 hover:border-amber-300 hover:shadow-sm transition group"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tool.icon}</span>
                <div>
                  <h3 className="font-semibold group-hover:text-amber-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-zinc-400">{tool.price}</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-500">{tool.desc}</p>
          </a>
        ))}
      </div>

      <footer className="text-center mt-16 text-sm text-zinc-400">
        <p>Built by one person. No team. No funding. Just shipping.</p>
        <p className="mt-1">
          <a href="https://ko-fi.com/penn662500" target="_blank" className="text-amber-600 hover:underline">
            Support on Ko-fi
          </a>
        </p>
      </footer>
    </div>
  );
}
