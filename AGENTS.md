# Spencer Hanson — Life Insurance Broker Website

## Project Overview
Personal website for Spencer Hanson, an independent life insurance broker working alongside Solace Financial. Serves clients nationwide across all 50 states.

**Domain:** protectedwithspencer.com
**Repo:** https://github.com/chillogu/nsrnc
**Deployed on:** Vercel (auto-deploys on push to `main`)

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Form Service:** Web3Forms (access key in contact page)
- **Deployment:** Vercel

## Contact Info
- **Email:** me@protectedwithspencer.com
- **Phone:** (914) 454-1515
- **Team:** Solace Financial
- **Role:** Independent Life Insurance Broker

## Project Structure
```
src/
  app/
    layout.tsx          # Root layout with Navbar + Footer
    page.tsx            # Home page (rapport-first, sales-driven)
    about/page.tsx      # About Spencer
    carriers/page.tsx   # Carrier list with external links
    contact/page.tsx    # Contact form (Web3Forms)
    globals.css         # Tailwind + custom theme
    icon.png            # Favicon (headshot)
  components/
    Navbar.tsx          # Fixed nav with headshot logo
    Footer.tsx          # Footer with contact info
    Hero.tsx            # Home hero with headshot
    CTA.tsx             # Reusable CTA section
    CarrierCard.tsx     # (unused, carriers page uses inline cards)
public/
  images/headshot.jpeg  # Spencer's headshot
  favicon.png           # Favicon copy
  favicon-32.png        # 32x32 favicon
  favicon-192.png       # 192x192 favicon
  favicon-512.png       # 512x512 favicon
```

## Design System
- **Colors:** Dark navy (`#030812`, `#0a1628`, `#111d33`) + Gold (`#c9a84c`) + White
- **Font:** System sans-serif (Apple System, Segoe UI, Roboto)
- **Style:** Sharp, professional, minimal. White CTAs on dark background. No gold buttons.
- **Tone:** Direct, honest, consultative. Sales energy without being pushy. "Stop putting this off."

## Key Decisions
- **No FFL affiliation** — Spencer is independent, works alongside Solace Financial
- **Rapport-first homepage** — intro → problem → process → good fit → CTA (not product catalog)
- **Carrier links** — each carrier card links to the carrier's official website (opens in new tab)
- **Form service** — Web3Forms (FormSubmit was flagged as phishing)
- **Favicon** — Spencer's headshot

## Adding a New Carrier
Edit `src/app/carriers/page.tsx` and add to the `carriers` array:
```ts
{ name: "Carrier Name", note: "Short description", url: "https://carrier-website.com/" },
```

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm start        # Run production build
```

## DNS Records (Squarespace → Vercel)
| Type | Host | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | 7d6a723bbbff72a8.vercel-dns-017.com |

## Git Author
- **Email:** chillogu@users.noreply.github.com
- **Name:** Spencer
- Must match GitHub account or Vercel deployments get blocked on private repos
