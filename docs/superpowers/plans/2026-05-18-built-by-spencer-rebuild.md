# Built by Spencer — Site Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild protectedwithspencer.com from a life insurance site into a cinematic web design service site called "Built by Spencer" with Three.js 3D hero, GSAP scroll animations, and Lenis smooth scroll.

**Architecture:** Single-page Next.js App Router site. All sections live in `src/app/page.tsx` as a vertical composition. Client-side animation libraries (GSAP, Lenis) are wrapped in a `SmoothScroll` client component mounted in `layout.tsx`. The Three.js orb is dynamically imported with `ssr: false` to avoid hydration issues. All copy runs through the humanizer skill before shipping.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind v4, TypeScript 6, Three.js + @react-three/fiber, GSAP + ScrollTrigger, Lenis, Web3Forms

---

## File Map

### Created
| File | Purpose |
|---|---|
| `src/components/SmoothScroll.tsx` | Lenis instance + GSAP ScrollTrigger RAF integration |
| `src/components/HeroOrb.tsx` | Three.js wireframe icosahedron (client-only) |
| `src/components/HeroSection.tsx` | Hero layout: headline, subtitle, CTA, orb |
| `src/components/ServicesSection.tsx` | 3 service cards with ScrollTrigger |
| `src/components/PortfolioSection.tsx` | 3 portfolio cards with alternating slide-in |
| `src/components/PricingSection.tsx` | Big number pricing + CTA |
| `src/components/ContactForm.tsx` | Web3Forms contact form |
| `src/components/SiteFooter.tsx` | Minimal footer |
| `public/portfolio/protectedwithspencer.png` | Portfolio screenshot |
| `public/portfolio/solacelifegroup.png` | Portfolio screenshot |
| `public/portfolio/resultsdetailing.png` | Portfolio screenshot |

### Modified
| File | Change |
|---|---|
| `src/app/globals.css` | Replace brand-*/ink-* tokens with dark palette |
| `src/app/layout.tsx` | Add Space Grotesk, new metadata, SmoothScroll wrapper, remove Footer |
| `src/app/page.tsx` | Rebuild as section composition |
| `src/components/Navbar.tsx` | Rebuild for Built by Spencer brand |
| `next.config.ts` | Add 301 redirects for /about /carriers /contact |

### Deleted
- `src/app/about/page.tsx`
- `src/app/carriers/page.tsx`
- `src/app/contact/page.tsx`
- `src/components/Hero.tsx`
- `src/components/CTA.tsx`
- `src/components/Footer.tsx`

---

## Task 1: Install dependencies + add redirects

**Files:**
- Modify: `package.json` (via npm install)
- Modify: `next.config.ts`

- [ ] **Step 1: Install animation and 3D libraries**

```bash
cd /Users/duzi/PersonalSite
npm install three @types/three @react-three/fiber @react-three/drei gsap lenis
```

Expected: packages added to `node_modules`, `package.json` dependencies updated.

- [ ] **Step 2: Add redirects for deleted routes**

Replace the contents of `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/carriers", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 3: Verify build still passes**

```bash
npm run build
```

Expected: Build succeeds. (Old routes still exist at this point — that's fine.)

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json next.config.ts
git commit -m "chore: install gsap/lenis/three, add redirects for old routes"
```

---

## Task 2: Replace color palette in globals.css

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace globals.css entirely**

```css
@import "tailwindcss";

@theme {
  --color-bg:      #080808;
  --color-surface: #111111;
  --color-border:  #1f1f1f;
  --color-amber:   #F59E0B;
  --color-orange:  #F97316;
  --color-white:   #ffffff;
  --color-muted:   #71717a;
  --color-dim:     #3f3f46;

  --font-sans:    "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif;
}

@layer base {
  html {
    scroll-behavior: auto; /* Lenis handles smooth scroll */
  }

  body {
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #080808;
    color: #ffffff;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
    letter-spacing: -0.03em;
    font-weight: 700;
  }

  ::selection {
    background-color: #F59E0B;
    color: #080808;
  }
}

@layer utilities {
  .gradient-amber {
    background: linear-gradient(135deg, #F59E0B, #F97316);
  }

  .text-gradient-amber {
    background: linear-gradient(135deg, #F59E0B, #F97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glow-amber {
    box-shadow: 0 0 60px 20px rgba(245, 158, 11, 0.08);
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "style: replace color palette with Built by Spencer dark theme"
```

---

## Task 3: Update layout.tsx

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Rewrite layout.tsx**

```tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://protectedwithspencer.com"),
  title: "Built by Spencer — Web Design",
  description: "Custom websites and landing pages. Starting at $175.",
  openGraph: {
    title: "Built by Spencer — Web Design",
    description: "Custom websites and landing pages. Starting at $175.",
    url: "https://protectedwithspencer.com",
    siteName: "Built by Spencer",
    images: [{ url: "/business_card.jpeg", width: 1191, height: 672, alt: "Built by Spencer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built by Spencer — Web Design",
    description: "Custom websites and landing pages. Starting at $175.",
    images: ["/business_card.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bg text-white antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
```

Note: `SmoothScroll` doesn't exist yet — TypeScript will error until Task 4. Create the file as a stub first if needed.

- [ ] **Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: update layout — Space Grotesk, new metadata, SmoothScroll wrapper"
```

---

## Task 4: Create SmoothScroll wrapper

**Files:**
- Create: `src/components/SmoothScroll.tsx`

- [ ] **Step 1: Create the Lenis + GSAP integration component**

```tsx
"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    const rafCb = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(rafCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafCb);
    };
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npm run build
```

Expected: Build passes. (The old components still exist and page.tsx still uses them — that's fine for now.)

- [ ] **Step 3: Commit**

```bash
git add src/components/SmoothScroll.tsx
git commit -m "feat: add Lenis + GSAP SmoothScroll wrapper"
```

---

## Task 5: Rebuild Navbar

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Rewrite Navbar.tsx**

```tsx
"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToContact = () => {
    setOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span
            className="font-display font-bold text-white text-lg tracking-tight cursor-pointer"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Built by Spencer
          </span>

          <button
            onClick={scrollToContact}
            className="hidden md:block gradient-amber text-black font-bold px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            Start a Project
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-t border-border">
          <div className="px-6 py-5">
            <button
              onClick={scrollToContact}
              className="w-full gradient-amber text-black font-bold py-3 rounded-full text-sm"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: rebuild Navbar for Built by Spencer brand"
```

---

## Task 6: Capture portfolio screenshots

**Files:**
- Create: `public/portfolio/protectedwithspencer.png`
- Create: `public/portfolio/solacelifegroup.png`
- Create: `public/portfolio/resultsdetailing.png`

- [ ] **Step 1: Create the portfolio directory**

```bash
mkdir -p /Users/duzi/PersonalSite/public/portfolio
```

- [ ] **Step 2: Capture screenshots using chrome browser tools**

Load `mcp__claude-in-chrome__tabs_context_mcp` and `mcp__claude-in-chrome__navigate` and `mcp__claude-in-chrome__computer`.

For each site:
1. Navigate to the URL
2. Resize window to 1440x900
3. Use `mcp__claude-in-chrome__computer` screenshot → save to `public/portfolio/<name>.png`

Sites to capture:
- `https://protectedwithspencer.com` → `public/portfolio/protectedwithspencer.png`
- `https://solacelifegroup.com` → `public/portfolio/solacelifegroup.png`
- `https://resultsdetailing.com` → `public/portfolio/resultsdetailing.png`

Alternatively, use any screenshot tool and place 1440×900 PNG files at the paths above.

- [ ] **Step 3: Verify files exist**

```bash
ls -la /Users/duzi/PersonalSite/public/portfolio/
```

Expected: 3 PNG files, each > 50KB.

- [ ] **Step 4: Commit**

```bash
git add public/portfolio/
git commit -m "feat: add portfolio screenshots"
```

---

## Task 7: Create HeroOrb (Three.js component)

**Files:**
- Create: `src/components/HeroOrb.tsx`

- [ ] **Step 1: Create the Three.js wireframe icosahedron**

```tsx
"use client";

import { useRef } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import * as THREE from "three";

function OrbMesh() {
  const meshRef = useRef<THREE.LineSegments>(null);

  useFrame((state: RootState) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x += 0.001;
    // Subtle mouse parallax via normalized mouse coords (-1 to 1)
    meshRef.current.rotation.y += state.mouse.x * 0.0004;
    meshRef.current.rotation.x += state.mouse.y * 0.0004;
  });

  const geo = new THREE.IcosahedronGeometry(2, 1);
  const edges = new THREE.EdgesGeometry(geo);

  return (
    <lineSegments ref={meshRef} geometry={edges}>
      <lineBasicMaterial color="#F59E0B" transparent opacity={0.65} />
    </lineSegments>
  );
}

export default function HeroOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <OrbMesh />
    </Canvas>
  );
}
```

- [ ] **Step 2: Verify TypeScript accepts it**

```bash
npx tsc --noEmit
```

Expected: No errors related to HeroOrb.tsx.

- [ ] **Step 3: Commit**

```bash
git add src/components/HeroOrb.tsx
git commit -m "feat: add Three.js wireframe icosahedron HeroOrb"
```

---

## Task 8: Create HeroSection

**Files:**
- Create: `src/components/HeroSection.tsx`

The hero uses a dynamic import for `HeroOrb` to disable SSR. GSAP animates the headline words on mount.

- [ ] **Step 1: Create HeroSection.tsx**

```tsx
"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";

const HeroOrb = dynamic(() => import("./HeroOrb"), { ssr: false });

const HEADLINE_WORDS = ["I build websites", "people actually", "notice."];

export default function HeroSection() {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const els = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    gsap.fromTo(
      els,
      { clipPath: "inset(0 0 100% 0)", y: 24, opacity: 0 },
      {
        clipPath: "inset(0 0 0% 0)",
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-bg overflow-hidden">
      {/* Ambient glow behind orb */}
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-32">
          {/* Left: text */}
          <div>
            <p className="text-amber text-xs uppercase tracking-[0.25em] font-semibold mb-8">
              Built by Spencer
            </p>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-8 overflow-hidden"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {HEADLINE_WORDS.map((line, i) => (
                <span
                  key={i}
                  className="block"
                  ref={(el) => { wordsRef.current[i] = el; }}
                >
                  {i === HEADLINE_WORDS.length - 1 ? (
                    <span className="text-gradient-amber">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="text-muted text-lg leading-relaxed mb-10 max-w-md">
              Custom design and development, done by one person who gives a damn.
            </p>

            <button
              onClick={scrollToContact}
              className="gradient-amber text-black font-bold px-8 py-4 rounded-full text-base hover:opacity-90 transition-opacity"
            >
              Start a Project
            </button>
          </div>

          {/* Right: 3D orb */}
          <div className="hidden lg:block relative h-[500px]">
            <HeroOrb />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: add HeroSection with GSAP text reveal and Three.js orb"
```

---

## Task 9: Create ServicesSection

**Files:**
- Create: `src/components/ServicesSection.tsx`

- [ ] **Step 1: Create ServicesSection.tsx**

```tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Full Websites",
    description:
      "A complete site designed and built from scratch — on your domain, deployed, and ready on day one. No templates, no shortcuts.",
    icon: "◻",
  },
  {
    title: "Landing Pages",
    description:
      "One focused page built to convert. Fast to launch, easy to hand off, and built to actually get people to do something.",
    icon: "◈",
  },
  {
    title: "Monthly Care",
    description:
      "I keep your site running. Copy updates, small fixes, new sections — handled the same day you ask. $20 a month, no contracts.",
    icon: "◎",
  },
];

export default function ServicesSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    gsap.fromTo(
      els,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: els[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-bg py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-amber text-xs uppercase tracking-[0.25em] font-semibold mb-4">
          What I Build
        </p>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          The work.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="bg-surface border border-border rounded-2xl p-8 hover:border-amber/40 transition-colors group"
            >
              <div className="text-3xl text-amber mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ServicesSection.tsx
git commit -m "feat: add ServicesSection with stagger scroll animation"
```

---

## Task 10: Create PortfolioSection

**Files:**
- Create: `src/components/PortfolioSection.tsx`

- [ ] **Step 1: Create PortfolioSection.tsx**

```tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    name: "Protected With Spencer",
    url: "https://protectedwithspencer.com",
    description: "Life insurance broker site — clean, conversion-focused, fully custom.",
    image: "/portfolio/protectedwithspencer.png",
  },
  {
    name: "Solace Life Group",
    url: "https://solacelifegroup.com",
    description: "Insurance agency site — professional, clear, built to generate leads.",
    image: "/portfolio/solacelifegroup.png",
  },
  {
    name: "Results Detailing",
    url: "https://resultsdetailing.com",
    description: "Auto detailing business site — local SEO, booking-focused, fast.",
    image: "/portfolio/resultsdetailing.png",
  },
];

export default function PortfolioSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((el, i) => {
      if (!el) return;
      const fromLeft = i % 2 === 0;
      gsap.fromTo(
        el,
        { x: fromLeft ? -60 : 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        }
      );
    });
  }, []);

  return (
    <section className="bg-bg py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-amber text-xs uppercase tracking-[0.25em] font-semibold mb-4">
          Work
        </p>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Stuff I've built.
        </h2>

        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="bg-surface border border-border rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 group hover:border-amber/30 transition-colors"
            >
              {/* Text — alternates sides on desktop */}
              <div className={`p-10 flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber text-sm font-semibold hover:opacity-70 transition-opacity"
                >
                  View Live →
                </a>
              </div>

              {/* Screenshot */}
              <div className={`relative h-56 lg:h-auto ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PortfolioSection.tsx
git commit -m "feat: add PortfolioSection with alternating slide-in animations"
```

---

## Task 11: Create PricingSection

**Files:**
- Create: `src/components/PricingSection.tsx`

- [ ] **Step 1: Create PricingSection.tsx**

```tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-surface py-32 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <p className="text-amber text-xs uppercase tracking-[0.25em] font-semibold mb-4">
          Pricing
        </p>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          No surprises.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="border border-border rounded-2xl p-10">
            <div
              className="text-6xl lg:text-7xl font-bold text-gradient-amber mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              $175
            </div>
            <p className="text-white font-semibold text-lg mb-2">To get started</p>
            <p className="text-muted text-sm leading-relaxed">
              A complete website — designed, built, and deployed. You bring the idea; I handle everything else.
            </p>
          </div>

          <div className="border border-border rounded-2xl p-10">
            <div
              className="text-6xl lg:text-7xl font-bold text-gradient-amber mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              $20
              <span className="text-3xl text-muted font-normal">/mo</span>
            </div>
            <p className="text-white font-semibold text-lg mb-2">To keep it running</p>
            <p className="text-muted text-sm leading-relaxed">
              Updates, fixes, and small changes — handled same-day. No retainer contracts, cancel whenever.
            </p>
          </div>
        </div>

        <button
          onClick={scrollToContact}
          className="gradient-amber text-black font-bold px-8 py-4 rounded-full text-base hover:opacity-90 transition-opacity"
        >
          Let&apos;s talk about your project
        </button>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PricingSection.tsx
git commit -m "feat: add PricingSection with big number display"
```

---

## Task 12: Create ContactForm

**Files:**
- Create: `src/components/ContactForm.tsx`

- [ ] **Step 1: Create ContactForm.tsx**

```tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formRef.current) return;
    gsap.fromTo(
      formRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 80%" },
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "43b462cb-8c33-4780-98b7-9d813615bb4c");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-bg py-32 px-6">
      <div className="max-w-2xl mx-auto" ref={formRef}>
        <p className="text-amber text-xs uppercase tracking-[0.25em] font-semibold mb-4">
          Start a Project
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Got something in mind?
        </h2>
        <p className="text-muted mb-10 leading-relaxed">
          Drop me a note. I&apos;ll get back to you within a day.
        </p>

        {status === "success" ? (
          <div className="bg-surface border border-amber/30 rounded-2xl p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Got it — I&apos;ll be in touch.</p>
            <p className="text-muted text-sm">Usually within a few hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-muted mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-dim text-sm focus:outline-none focus:border-amber/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-muted mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-dim text-sm focus:outline-none focus:border-amber/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">Project type</label>
              <select
                name="project_type"
                required
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber/50 transition-colors appearance-none"
              >
                <option value="">Select one</option>
                <option value="Full Website">Full Website</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-dim text-sm focus:outline-none focus:border-amber/50 transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Try again or email me directly.</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="gradient-amber text-black font-bold px-8 py-4 rounded-full text-base hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send it →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ContactForm.tsx
git commit -m "feat: add ContactForm with Web3Forms and scroll animation"
```

---

## Task 13: Create SiteFooter

**Files:**
- Create: `src/components/SiteFooter.tsx`

- [ ] **Step 1: Create SiteFooter.tsx**

```tsx
export default function SiteFooter() {
  return (
    <footer className="bg-bg border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-bold text-white text-base tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Built by Spencer
        </span>
        <a
          href="mailto:me@protectedwithspencer.com"
          className="text-muted text-sm hover:text-white transition-colors"
        >
          me@protectedwithspencer.com
        </a>
        <p className="text-dim text-xs">© 2026</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/SiteFooter.tsx
git commit -m "feat: add minimal SiteFooter"
```

---

## Task 14: Rebuild page.tsx and wire everything together

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Rewrite page.tsx**

```tsx
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="bg-bg">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ContactForm />
      <SiteFooter />
    </main>
  );
}
```

- [ ] **Step 2: Run build**

```bash
npm run build
```

Expected: Build succeeds. Any type errors will surface here — fix them before continuing.

- [ ] **Step 3: Run dev server and visually verify**

```bash
npm run dev
```

Open `http://localhost:3000` and check:
- Dark background renders throughout
- Navbar shows "Built by Spencer" + amber CTA button
- Hero: headline animates in, 3D orb visible on desktop
- Services: 3 cards appear on scroll
- Portfolio: 3 project cards with screenshots (or placeholder if screenshots not yet captured)
- Pricing: big $175 and $20/mo numbers in amber gradient
- Contact: form renders, fields are styled dark
- Footer: minimal, email visible

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: rebuild page.tsx as Built by Spencer single-page composition"
```

---

## Task 15: Delete old files + update AGENTS.md

**Files:**
- Delete: `src/app/about/page.tsx`
- Delete: `src/app/carriers/page.tsx`
- Delete: `src/app/contact/page.tsx`
- Delete: `src/components/Hero.tsx`
- Delete: `src/components/CTA.tsx`
- Delete: `src/components/Footer.tsx`
- Modify: `AGENTS.md`

- [ ] **Step 1: Delete old routes and components**

```bash
rm src/app/about/page.tsx
rm src/app/carriers/page.tsx
rm src/app/contact/page.tsx
rm src/components/Hero.tsx
rm src/components/CTA.tsx
rm src/components/Footer.tsx
```

Also remove now-empty route directories:
```bash
rmdir src/app/about src/app/carriers src/app/contact 2>/dev/null || true
```

- [ ] **Step 2: Run build to confirm nothing broken**

```bash
npm run build
```

Expected: Build passes with no references to deleted files.

- [ ] **Step 3: Update AGENTS.md**

Replace the content of `AGENTS.md` to reflect the new site — update project overview, design system, color tokens, component list, and remove all insurance-specific content. Key sections to update:
- Project overview → web design service, "Built by Spencer"
- Colors → new `bg`, `surface`, `border`, `amber`, `orange`, `muted`, `dim` tokens
- Typography → Space Grotesk (display) + Inter (body)
- Components → new component list
- Remove: carriers array, licensed states, NPN, Solace Financial references, form service note
- Keep: domain, Vercel deploy, git author info, Web3Forms key

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: delete old insurance routes and components, update AGENTS.md"
```

---

## Task 16: Humanize all copy

**Files:**
- Modify: `src/components/HeroSection.tsx` (headline, subtitle)
- Modify: `src/components/ServicesSection.tsx` (card descriptions)
- Modify: `src/components/PricingSection.tsx` (pricing descriptions)
- Modify: `src/components/ContactForm.tsx` (section headline, intro)

- [ ] **Step 1: Invoke the humanizer skill**

Run the humanizer skill on all copy in the site. Collect all copy text (headline, subtitle, service descriptions, pricing descriptions, contact intro) and pass through the humanizer to strip AI texture and apply Spencer's voice.

Copy to humanize:
```
HERO HEADLINE: "I build websites people actually notice."
HERO SUBTITLE: "Custom design and development, done by one person who gives a damn."

SERVICES:
Full Websites: "A complete site designed and built from scratch — on your domain, deployed, and ready on day one. No templates, no shortcuts."
Landing Pages: "One focused page built to convert. Fast to launch, easy to hand off, and built to actually get people to do something."
Monthly Care: "I keep your site running. Copy updates, small fixes, new sections — handled the same day you ask. $20 a month, no contracts."

PRICING:
$175 description: "A complete website — designed, built, and deployed. You bring the idea; I handle everything else."
$20/mo description: "Updates, fixes, and small changes — handled same-day. No retainer contracts, cancel whenever."

CONTACT:
Headline: "Got something in mind?"
Intro: "Drop me a note. I'll get back to you within a day."
```

- [ ] **Step 2: Apply humanized copy to components**

Update each component with the humanized text returned by the skill.

- [ ] **Step 3: Commit**

```bash
git add src/components/
git commit -m "copy: humanize all site copy — Spencer's voice applied"
```

---

## Task 17: Final build verification + deploy

- [ ] **Step 1: Production build**

```bash
npm run build
```

Expected: Build completes with no errors. Note any warnings.

- [ ] **Step 2: Test in dev server — full walkthrough**

```bash
npm run dev
```

Check at `http://localhost:3000`:
- [ ] GSAP headline animation fires on load
- [ ] Three.js orb renders and rotates (desktop only)
- [ ] Lenis smooth scroll works — no jank
- [ ] "Start a Project" CTA scrolls to #contact
- [ ] ScrollTrigger animations fire for all sections
- [ ] Contact form submits and shows success state
- [ ] `/about`, `/carriers`, `/contact` all redirect to `/`
- [ ] Mobile layout looks correct (orb hidden, single column)

- [ ] **Step 3: Push to GitHub (triggers Vercel auto-deploy)**

```bash
git push origin main
```

- [ ] **Step 4: Verify live site**

Open `https://protectedwithspencer.com` and confirm the new site is live.

- [ ] **Step 5: Send confirmation to Spencer via iMessage**

Use `mcp__plugin_imessage_imessage__reply` to notify Spencer the site is live.

---

## Self-Review

**Spec coverage check:**
- ✅ Brand: "Built by Spencer" — Navbar, HeroSection, SiteFooter
- ✅ Dark palette (#080808, amber/orange) — globals.css Task 2
- ✅ Space Grotesk — layout.tsx Task 3
- ✅ Three.js wireframe icosahedron — HeroOrb Task 7
- ✅ Mouse parallax — HeroOrb `state.mouse` in useFrame
- ✅ Lenis smooth scroll — SmoothScroll.tsx Task 4
- ✅ GSAP ScrollTrigger — all section components
- ✅ GSAP text reveal on mount — HeroSection Task 8
- ✅ Services: 3 cards — ServicesSection Task 9
- ✅ Portfolio: 3 sites with screenshots — PortfolioSection Task 10, screenshot Task 6
- ✅ Pricing: $175 + $20/mo — PricingSection Task 11
- ✅ Contact form (Web3Forms) — ContactForm Task 12
- ✅ Footer — SiteFooter Task 13
- ✅ Old routes redirected — next.config Task 1
- ✅ Humanizer on all copy — Task 16
- ✅ AGENTS.md updated — Task 15

**No placeholders found.**

**Type consistency:** All component names are consistent across tasks. `HeroOrb` exported default from `HeroOrb.tsx`, imported via dynamic in `HeroSection.tsx`. `SmoothScroll` exported default, imported in `layout.tsx`. All section components imported directly in `page.tsx`.
