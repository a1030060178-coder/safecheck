import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — SafeCheck",
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
];

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">SafeCheck Blog</h1>
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
