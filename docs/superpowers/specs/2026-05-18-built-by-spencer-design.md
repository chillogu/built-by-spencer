# Built by Spencer — Web Design Service Site Spec
**Date:** 2026-05-18
**Domain:** protectedwithspencer.com (replacing the insurance site entirely)
**Stack:** Next.js 16 (App Router), Tailwind v4, TypeScript

---

## Overview

Rebuild protectedwithspencer.com from a life insurance broker site into a premium web design service site called **Built by Spencer**. The aesthetic is cinematic dark: near-black background, warm amber/orange gradient accents, a Three.js 3D element in the hero, GSAP scroll-triggered animations, and Lenis smooth scroll — inspired by oryzo.ai.

Spencer is starting a real web design service: full website builds, landing pages, and monthly maintenance. All site copy must be run through the humanizer skill before finalizing.

---

## Brand

- **Name:** Built by Spencer
- **Tagline:** "Websites that actually work."
- **Tone:** Direct, confident, personal. Not corporate. Not hustle-bro. Real person, real work.
- **Copy rule:** All copy must pass through the humanizer skill — no AI-textured filler phrases.

---

## Color Palette

Replace all existing `brand-*` and `ink-*` tokens in `globals.css`. Tailwind v4 uses `@theme` to expose tokens as utilities:

```css
@theme {
  --color-bg:       #080808;   /* near-black background */
  --color-surface:  #111111;   /* card/section surfaces */
  --color-border:   #1f1f1f;   /* subtle borders */
  --color-amber:    #F59E0B;   /* primary amber accent */
  --color-orange:   #F97316;   /* orange gradient end */
  --color-white:    #ffffff;
  --color-muted:    #71717a;   /* zinc-500 — body text, captions */
  --color-dim:      #3f3f46;   /* zinc-700 — dividers, inactive */
}
```

This makes utilities like `bg-bg`, `text-amber`, `border-border` available automatically.

Gradient: `linear-gradient(135deg, #F59E0B, #F97316)` — used for CTA buttons, glow effects, accent lines.

---

## Typography

- **Display:** Space Grotesk (Google Fonts, weights 500/700) — replaces Inter for headings
- **Body:** Inter (keep existing import) — body copy, captions, nav
- Headlines: 80–120px desktop, 48–64px mobile, `font-bold tracking-tight`
- No serif. No thin weights in headings.

Add Space Grotesk to `layout.tsx` alongside Inter:
```ts
import { Inter, Space_Grotesk } from "next/font/google";
```

---

## Dependencies to Add

```bash
npm install three @types/three @react-three/fiber @react-three/drei
npm install gsap @gsap/react
npm install lenis
```

---

## Page Structure

Single-page design. All content on `src/app/page.tsx`. Routes `/about`, `/carriers`, `/contact` are removed — replace with `not-found.tsx` redirecting home, or delete.

### 1. Navbar
- Fixed, `bg-bg/80 backdrop-blur`
- Left: "Built by Spencer" wordmark in Space Grotesk, white
- Right: "Start a Project" pill button — amber gradient background, black text
- No other links (page is single-scroll)

### 2. Hero Section
- Full viewport height (`min-h-screen`)
- Background: `#080808` with subtle radial amber glow behind the 3D element
- **Left:** Large headline text (2–3 lines), subtitle (1–2 sentences), CTA button
- **Right (or centered):** Three.js canvas — wireframe icosahedron, amber `#F59E0B` material, slow Y-axis rotation (~0.003 rad/frame), mouse parallax (subtle X/Y offset tracking cursor position)
- Headline: "Websites that don't look like websites." (or humanized variant)
- Subtitle: 1 short sentence about what Built by Spencer does
- CTA: "Start a Project" → scrolls to contact form
- GSAP: headline words animate up into view on mount (staggered clip-path reveal)

#### Three.js Component (`src/components/HeroOrb.tsx`)
- `<Canvas>` from `@react-three/fiber`
- `IcosahedronGeometry` with detail=1, `EdgesGeometry` for wireframe
- `LineSegments` with `LineBasicMaterial` color `#F59E0B`, opacity ~0.7
- `useFrame` for rotation
- Mouse move event on window → lerp rotation offset
- `Suspense` fallback: `null`
- Disable on mobile (`useMediaQuery` < 768px → render nothing)

### 3. Services Section
- Dark background (`#080808`)
- Eyebrow: "What I Build"
- Three cards in a row (stacked on mobile):
  1. **Full Websites** — design + development, deployed and live
  2. **Landing Pages** — fast single-page conversion sites
  3. **Monthly Care** — updates, fixes, hosting support
- Cards: `bg-surface border border-border rounded-2xl p-8`
- Hover: subtle amber border glow (`border-amber/40 shadow-amber/10`)
- GSAP ScrollTrigger: cards stagger-slide up into view when section enters viewport

### 4. Portfolio Section
- Eyebrow: "Work"
- 3 projects, each as a large dark card:
  | Project | URL | Description |
  |---|---|---|
  | protectedwithspencer.com | protectedwithspencer.com | Life insurance broker site |
  | solacelifegroup.com | solacelifegroup.com | Insurance agency site |
  | resultsdetailing.com | resultsdetailing.com | Auto detailing business site |
- Card layout: left = project name + 1-line description + "View Live →" link; right = screenshot (static image, taken at build or sourced manually)
- Alternating left/right layout on desktop, stacked on mobile
- GSAP ScrollTrigger: each card slides in from alternating sides

> **Note:** Screenshots of the 3 portfolio sites need to be captured and placed in `public/portfolio/`. Either use a screenshot tool or the `mcp__claude-in-chrome` browser tools at build time.

### 5. Pricing Section
- Eyebrow: "Pricing"
- No pricing table. Just big numbers + plain language:
  - "Starting at **$175**" — for a full website build
  - "**$20/mo**" — to keep it running (updates, fixes, support)
- Short paragraph below explaining what's included (humanized copy)
- CTA: "Let's talk about your project" → scrolls to contact

### 6. Contact Form Section
- Eyebrow: "Start a Project"
- Form fields:
  - Name (text)
  - Email (email)
  - Project type (select): Full Website / Landing Page / Not sure yet
  - Message (textarea)
- Submit button: amber gradient pill, "Send it →"
- Form service: Web3Forms (access key `43b462cb-8c33-4780-98b7-9d813615bb4c`, already in codebase)
- Success state: inline confirmation message, no page reload
- GSAP: form slides up into view on scroll

### 7. Footer
- Minimal, `bg-bg border-t border-border`
- "Built by Spencer" wordmark left
- Email: `me@protectedwithspencer.com` right (or centered)
- One line: © 2026

---

## Animations Summary

| Element | Animation | Trigger |
|---|---|---|
| Hero headline | Staggered word clip-path reveal | On mount |
| Hero orb | Continuous rotation + mouse parallax | Continuous |
| Service cards | Stagger slide-up | ScrollTrigger enter |
| Portfolio cards | Slide in from alternating sides | ScrollTrigger enter |
| Pricing numbers | Count-up or fade-in | ScrollTrigger enter |
| Contact form | Slide up | ScrollTrigger enter |

Lenis wraps the entire page. GSAP ScrollTrigger is registered once in a root `useEffect`.

**Lenis + GSAP integration note:** Lenis overrides native scroll, so GSAP ScrollTrigger must use Lenis's RAF loop. The standard pattern is:
```ts
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```
This must be set up in a single `useEffect` in the root layout or a `<SmoothScroll>` wrapper component.

**Old route redirect:** Add a catch-all redirect in `next.config.ts` so `/about`, `/carriers`, `/contact` redirect to `/` with a 301.

---

## File Changes

### New files
- `src/components/HeroOrb.tsx` — Three.js canvas component
- `src/components/ServicesSection.tsx`
- `src/components/PortfolioSection.tsx`
- `src/components/PricingSection.tsx`
- `src/components/ContactForm.tsx`
- `src/components/SiteFooter.tsx`
- `public/portfolio/protectedwithspencer.png`
- `public/portfolio/solacelifegroup.png`
- `public/portfolio/resultsdetailing.png`

### Modified files
- `src/app/page.tsx` — rebuilt as single-page composition
- `src/app/layout.tsx` — add Space Grotesk, update metadata (title, OG)
- `src/app/globals.css` — replace color tokens with Built by Spencer palette
- `src/components/Navbar.tsx` — rebuilt for new brand

### Deleted/emptied
- `src/app/about/page.tsx` — delete
- `src/app/carriers/page.tsx` — delete
- `src/app/contact/page.tsx` — delete (contact is now inline on homepage)

---

## Metadata

```ts
title: "Built by Spencer — Web Design"
description: "Custom websites and landing pages. Starting at $175."
// OG image: new dark hero screenshot or branded card (update after build)
```

---

## Copy Guidelines (Humanizer Required)

All placeholder copy below must be run through the humanizer skill before going live:

- Hero headline: "Websites that don't look like websites."
- Hero subtitle: 1 sentence about what Built by Spencer delivers
- Service card descriptions: 2–3 sentences each
- Pricing section paragraph: what's included for $175 and $20/mo
- Contact section intro: 1–2 sentences

**Rule:** No phrases like "elevate your brand," "take your business to the next level," "in today's digital landscape," or any other AI-textured filler.

---

## AGENTS.md Update Required

After the build, update `AGENTS.md` to reflect the new site purpose, color tokens, components, and remove all insurance-related content.
