import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://safecheck-omega.vercel.app";
  const posts = [
    "why-solo-living-needs-daily-check-in",
    "dead-mans-switch-modern-guide",
    "wellness-check-services-compared",
    "solo-travel-safety-checkin",
    "digital-nomad-safety-essentials",
    "remote-worker-mental-health-checkin",
    "best-daily-check-in-apps-2026",
    "personal-safety-app-guide",
    "emergency-preparedness-living-alone",
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/alternatives`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/living-alone-safety`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/elderly`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];
}
