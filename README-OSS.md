# 🛡️ SafeCheck — Never Go Unnoticed

**One click a day. If you miss it, we alert the people you trust.**

[![Website](https://img.shields.io/badge/Live-safecheck--omega.vercel.app-amber)](https://safecheck-omega.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

---

## What is SafeCheck?

SafeCheck is a **digital dead man's switch** for the 125M+ people living alone worldwide.

- Set a daily check-in time
- Receive an email reminder
- Click the link → confirmed safe
- Miss your window → emergency contacts get alerted

**Free tier: 1 check-in/day, 1 emergency contact. Pro: $5/month for unlimited.**

---

## Why I Built This

I live alone. One day I realized: if something happened to me, no one would know for *days*.

I built SafeCheck over a weekend using AI tools. Total cost: $0. It's been running on free infrastructure ever since.

---

## Tech Stack (All Free Tiers)

| Layer | Technology | Cost |
|-------|-----------|------|
| Frontend | Next.js 16 | $0 |
| Hosting | Vercel | $0 |
| Database | Supabase | $0 (500MB) |
| Emails | Resend | $0 (100/day) |
| Payments | Paddle | $0 base |
| Cron | cron-job.org | $0 |

**Monthly infrastructure cost: $0**

---

## Quick Start

### Prerequisites
- Node.js 18+
- Supabase account (free)
- Resend account (free)
- Paddle account (free, for payments)

### Setup

```bash
git clone https://github.com/YOUR_USER/safecheck.git
cd safecheck
npm install
cp .env.local.example .env.local
# Fill in your Supabase, Resend, and Paddle keys
npm run dev
```

### Database

Run the SQL in `supabase-schema.sql` in your Supabase SQL Editor.

### Deploy

```bash
npx vercel --prod
```

---

## Architecture

```
User signs up → Unique UUID token generated
              → Welcome email sent (Resend)
              → Daily email at check-in time
              → User clicks link → Check-in recorded
              → If missed + grace period → Emergency contact alerted
```

No user accounts. No passwords. Just a unique link. Bookmark it, that's your key.

---

## SEO Pages

- `/blog` — Solo living safety articles
- `/blog/why-solo-living-needs-daily-check-in`
- `/blog/dead-mans-switch-modern-guide`

---

## License

MIT — build your own, save lives.

---

**Try it:** [safecheck-omega.vercel.app](https://safecheck-omega.vercel.app)
