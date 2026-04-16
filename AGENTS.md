# Spencer Hanson — Life Insurance Broker Website

## Project Overview
Personal website for Spencer Hanson, an independent life insurance broker working alongside Solace Financial. Licensed in New York, Texas, and Ohio.

**Domain:** protectedwithspencer.com
**Repo:** https://github.com/chillogu/nsrnc
**Deployed on:** Vercel (auto-deploys on push to `main`)

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Form Service:** Web3Forms (access key: `43b462cb-8c33-4780-98b7-9d813615bb4c`)
- **Deployment:** Vercel

## Contact Info
- **Email:** me@protectedwithspencer.com
- **Phone:** (914) 454-1515
- **Team:** Solace Financial
- **Role:** Independent Life Insurance Broker
- **NPN:** 22179707
- **Calendar:** https://calendar.notion.so/meet/spencerhanson/insurance

## Licensed States
Spencer is currently licensed in **New York, Texas, and Ohio only**. Do not reference other states or "all 50 states" anywhere on the site.

## Carriers
Spencer currently works with these three carriers only. More are being added soon — always include a "more coming soon" note near carrier lists.

```ts
const carriers = [
  {
    name: "Americo",
    note: "Life insurance & final expense",
    url: "https://americo.com/",
    description: "Specializes in life insurance and final expense coverage. A solid option for straightforward, affordable policies.",
  },
  {
    name: "National Life Group",
    note: "Life insurance & financial services",
    url: "https://www.nationallife.com/",
    description: "Over 175 years in business. Offers a wide range of life and living benefits products backed by a financially strong company.",
  },
  {
    name: "Mutual of Omaha",
    note: "Life insurance & Medicare supplement",
    url: "https://mutualofomaha.com/",
    description: "One of the most recognized names in insurance. Strong options for term life, whole life, and Medicare supplement plans.",
  },
];
```

To add a carrier, edit `src/app/carriers/page.tsx` and add to the `carriers` array.

## Design System (Updated April 2026)

### Theme
Clean, professional landing page. Inspired by modern SaaS/professional service landing pages (Dribbble reference: dribbble.com/shots/26183091). **Centered hero** with large headline, social proof element, centered CTAs, carrier logo strip, and full-width photo below. White background with deep navy blue accent from Spencer's business card.

### Colors
Primary accent is the deep navy blue from Spencer's business card. Full palette defined in `globals.css` using `brand-*` token names:

```css
--color-brand-900: #0b2a5b;  /* PRIMARY ACCENT — use for CTAs, highlights, dark sections */
--color-brand-800: #0f3574;
--color-brand-700: #134292;
--color-brand-600: #1e56b5;
--color-brand-500: #2f6bd1;
--color-brand-400: #5f8fe0;
--color-brand-300: #92b2ea;
--color-brand-200: #c2d3f2;
--color-brand-100: #e4ecf9;
--color-brand-50:  #f3f7fd;

/* Neutrals — ink-* token names */
--color-ink-950: #05080f;
--color-ink-900: #0f1420;
--color-ink-800: #1c2333;
--color-ink-700: #2d3648;
--color-ink-600: #4b5669;
--color-ink-500: #6b7487;
--color-ink-400: #8e96a8;
--color-ink-300: #c0c6d2;
--color-ink-200: #dfe3eb;
--color-ink-100: #eef1f6;
--color-ink-50:  #f7f9fc;
```

### Typography
- **All text:** Inter — imported from Google Fonts via `next/font/google`
- Font variable: `--font-inter`
- Headings use `font-bold tracking-tight` with tight line-height

```ts
// In layout.tsx:
import { Inter } from "next/font/google";
```

### Component Style Rules
- **Buttons (primary):** `bg-brand-900 text-white rounded-full` — pill shape
- **Buttons (secondary):** text with underline, or `border border-ink-200 rounded-md`
- **Cards:** `rounded-xl border border-ink-200`. Hover: `hover:border-brand-900/30 hover:shadow-md`
- **Dark sections (CTA):** `bg-brand-900` with grid overlay pattern
- **Section backgrounds:** `bg-white` or `bg-ink-50/70`. No tan or gold.
- **Eyebrow labels:** `text-brand-700 text-xs uppercase tracking-[0.2em] font-semibold`
- **Grid background utility:** `.grid-bg` — subtle dot/line grid used in hero and section backgrounds
- **No dark mode.** Light theme only.
- **No gold/tan/cream colors.** Navy + white + ink neutrals only.

### Hero Layout (Dribbble-style)
The hero is **centered**, not a split layout:
1. Social proof row (state badges + "Licensed in NY, TX, OH")
2. Large centered headline with dark + faded text treatment
3. Subtitle paragraph
4. Two CTAs: pill primary button + text link secondary
5. Carrier logos strip
6. Full-width photo with gradient overlay and name card

### Tone
Direct, honest, consultative. Sales energy without being pushy. "Stop putting this off." Personal and approachable — not overly corporate.

## Project Structure
```
src/
  app/
    layout.tsx          # Root layout — imports Inter, metadata with OG image
    page.tsx            # Home page (centered hero → problem → how it works → good fit → CTA)
    about/page.tsx      # About Spencer
    carriers/page.tsx   # 3 carriers with external links + "more coming soon"
    contact/page.tsx    # Contact form (Web3Forms) + state dropdown (NY/TX/OH)
    globals.css         # Tailwind v4 + brand-*/ink-* color tokens + .grid-bg utility
    icon.png            # Favicon
  components/
    Navbar.tsx          # Fixed white nav, square logo mark, "Get a Quote" CTA
    Footer.tsx          # Dark (ink-950) 3-column footer
    Hero.tsx            # Centered layout: social proof, headline, CTAs, logos, photo
    CTA.tsx             # brand-900 dark CTA section with grid overlay
public/
  images/headshot.jpeg  # Spencer's headshot
  business_card.jpeg    # Used as OG/social preview image
  favicon.png           # Favicon
```

## Metadata / OG Image
The business card (`/public/business_card.jpeg`) is used as the Open Graph preview image — this is what appears when someone shares the site link in iMessage, Slack, LinkedIn, etc. **Do not change this.**

```ts
// In layout.tsx metadata:
images: [
  {
    url: "/business_card.jpeg",
    width: 1191,
    height: 672,
    alt: "Spencer Hanson — Independent Insurance Broker",
  },
],
```

## Key Decisions
- **No FFL affiliation** — Spencer is independent, works alongside Solace Financial
- **Rapport-first homepage** — intro → problem → how it works → good fit → CTA
- **Licensed states only** — NY, TX, OH. Never say "all 50 states"
- **3 carriers only** — Americo, National Life Group, Mutual of Omaha. Always add "more coming soon"
- **Carrier links** — each carrier links to the carrier's official website (opens in new tab)
- **Form service** — Web3Forms (FormSubmit was flagged as phishing)
- **OG image** — Spencer's business card (not headshot)
- **Contact form** — includes state dropdown limited to NY, TX, OH
- **No dark mode** — light theme only

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm start        # Run production build
```

## Git Author
- **Email:** chillogu@users.noreply.github.com
- **Name:** Spencer
- Must match GitHub account or Vercel deployments get blocked on private repos

```bash
git config user.email "chillogu@users.noreply.github.com"
git config user.name "Spencer"
```

## DNS Records (Squarespace → Vercel)
| Type | Host | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | 7d6a723bbbff72a8.vercel-dns-017.com |
