import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — DailyPing",
  description:
    "Tips and resources for safer solo living, wellness checks, and personal security.",
};

const posts = [
  {
    slug: "why-solo-living-needs-daily-check-in",
    title: "Why Everyone Living Alone Needs a Daily Check-In System",
    date: "2026-05-18",
    excerpt:
      "Over 125 million people live alone worldwide. Here's why a simple daily check-in could save your life — and how to set one up in 60 seconds.",
  },
  {
    slug: "dead-mans-switch-modern-guide",
    title: "The Modern Dead Man's Switch: Digital Safety Nets for Solo Dwellers",
    date: "2026-05-18",
    excerpt:
      "From analog keyholders to AI-powered check-in apps, here's how safety check-ins have evolved and which one is right for you.",
  },
  {
    slug: "wellness-check-services-compared",
    title: "Wellness Check Services Compared: Apps vs Human Calls (2026)",
    date: "2026-05-19",
    excerpt:
      "Automated apps, professional calling services, or DIY? We compared every type of wellness check — here's which delivers the best value.",
  },
  {
    slug: "solo-travel-safety-checkin",
    title: "Solo Travel Safety: Why a Check-In System Matters More Than Insurance",
    date: "2026-05-19",
    excerpt:
      "Travel insurance covers your luggage. A daily check-in covers YOU. How digital nomads stay safe anywhere.",
  },
  {
    slug: "digital-nomad-safety-essentials",
    title: "Digital Nomad Safety: 10 Non-Negotiable Tools for 2026",
    date: "2026-05-19",
    excerpt:
      "Essential safety tools every digital nomad needs — from check-in systems to VPNs to emergency protocols.",
  },
  {
    slug: "remote-worker-mental-health-checkin",
    title: "Remote Work Isolation: How a Daily Check-In Protects Mental Health",
    date: "2026-05-19",
    excerpt:
      "23% of remote workers cite loneliness as their #1 struggle. A daily check-in routine can be a lifeline.",
  },
  {
    slug: "best-daily-check-in-apps-2026",
    title: "Best Daily Check-In Apps 2026: Full Comparison Guide",
    date: "2026-05-19",
    excerpt:
      "We tested DailyPing, Snug Safety, CheckOnMe, and more. Here's the definitive ranking of safety check-in apps.",
  },
  {
    slug: "personal-safety-app-guide",
    title: "Personal Safety Apps: The Complete 2026 Guide",
    date: "2026-05-19",
    excerpt:
      "Every category of personal safety app explained: check-ins, emergency SOS, location sharing, and home security.",
  },
  {
    slug: "emergency-preparedness-living-alone",
    title: "Emergency Preparedness for Solo Living: 30-Minute Setup",
    date: "2026-05-19",
    excerpt:
      "Fire, medical, power outage — a 30-minute emergency prep checklist for people who live alone.",
  },
  {
    slug: "why-freelancers-need-dead-mans-switch",
    title: "Why Every Freelancer Needs a Dead Man's Switch",
    date: "2026-05-19",
    excerpt:
      "When you work alone and something happens, your clients won't know for days. Protect your business AND your life.",
  },
  {
    slug: "senior-safety-technology-guide-2026",
    title: "Senior Safety Technology: The Complete 2026 Guide",
    date: "2026-05-19",
    excerpt:
      "From simple check-in apps to full smart homes — every safety tech option for aging in place, ranked by complexity.",
  },
  {
    slug: "solo-living-statistics-trends-2026",
    title: "Solo Living Statistics 2026: 125M+ and Growing",
    date: "2026-05-19",
    excerpt:
      "The numbers behind the solo living boom. Demographics, risks, and what it means for personal safety technology.",
  },
  {
    slug: "college-student-safety-essentials",
    title: "College Student Safety: 8 Essential Tools for Campus Living",
    date: "2026-05-19",
    excerpt:
      "First time away from home? These 8 free tools keep you safe on and off campus — starting with a daily check-in.",
  },
  {
    slug: "lone-worker-safety-solutions-2026",
    title: "Lone Worker Safety Solutions: Complete 2026 Guide",
    date: "2026-05-19",
    excerpt:
      "From free check-in apps to enterprise monitoring — every safety solution for lone workers.",
  },
  {
    slug: "night-shift-worker-safety-checkin",
    title: "Night Shift Worker Safety: Why Check-Ins Matter on Irregular Schedules",
    date: "2026-05-19",
    excerpt:
      "20% of the workforce works nights. Flexible check-ins protect workers when everyone else is asleep.",
  },
  {
    slug: "pet-owners-safety-checkin",
    title: "Pet Owners Living Alone: Why Your Pet Can't Be Your Only Safety Net",
    date: "2026-05-19",
    excerpt:
      "A dog can't dial 911. How a daily check-in protects both you AND your pet when you live alone.",
  },
  {
    slug: "safety-gift-idea-elderly-parents",
    title: "The Best Gift for Aging Parents: Peace of Mind (Not Another Sweater)",
    date: "2026-05-19",
    excerpt:
      "Skip the sweater. A daily safety check-in is the gift your aging parents actually need.",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">DailyPing Blog</h1>
      <p className="text-zinc-500 mb-10">
        Safer solo living tips, wellness check guides, and personal security resources.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-zinc-100 pb-8 last:border-0"
          >
            <time className="text-xs text-zinc-400">{post.date}</time>
            <h2 className="text-xl font-semibold mt-1 mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-amber-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-amber-600 text-sm font-medium hover:underline mt-2 inline-block"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
