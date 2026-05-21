import { NextResponse } from "next/server";

export async function GET() {
  const results: string[] = [];

  // 1. Ping Google sitemap
  try {
    const g = await fetch(
      "https://www.google.com/ping?sitemap=https://dailyping-omega.vercel.app/sitemap.xml"
    );
    results.push(`Google: ${g.status}`);
  } catch (e) {
    results.push(`Google: error`);
  }

  // 2. Ping Bing sitemap
  try {
    const b = await fetch(
      "https://www.bing.com/ping?sitemap=https://dailyping-omega.vercel.app/sitemap.xml"
    );
    results.push(`Bing: ${b.status}`);
  } catch (e) {
    results.push(`Bing: error`);
  }

  // 3. Ping IndexNow (Bing/Yandex)
  try {
    const idx = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "dailyping-omega.vercel.app",
        key: "b0f1e2d3c4a5968778695a4b3c2d1e0f",
        urlList: [
          "https://dailyping-omega.vercel.app/",
          "https://dailyping-omega.vercel.app/blog",
          "https://dailyping-omega.vercel.app/alternatives",
          "https://dailyping-omega.vercel.app/pricing",
          "https://dailyping-omega.vercel.app/elderly",
        ],
      }),
    });
    results.push(`IndexNow: ${idx.status}`);
  } catch (e) {
    results.push(`IndexNow: error`);
  }

  // 4. Post to HN
  try {
    const hn = await fetch("https://news.ycombinator.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        title: "Show HN: DailyPing — A digital dead man's switch for solo living",
        url: "https://dailyping-omega.vercel.app",
        text: "One click a day proves you're okay. If you miss it, we alert your emergency contacts. Free tier with Pro at $5/mo. Built for $0 over a weekend. Open source.",
      }).toString(),
    });
    results.push(`HN: ${hn.status}`);
  } catch (e) {
    results.push(`HN: error`);
  }

  return NextResponse.json({ results, time: new Date().toISOString() });
}
