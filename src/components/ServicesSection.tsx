"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ICONS = [
  // Monitor / browser window
  <svg key="web" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  // Single page / document
  <svg key="page" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  // Wrench / maintenance
  <svg key="care" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
];

const SERVICES = [
  {
    title: "Full Websites",
    description:
      "A complete site, designed and built from scratch. On your domain, deployed, and ready on day one. No templates, no shortcuts.",
  },
  {
    title: "Landing Pages",
    description:
      "One focused page built to convert. Fast to launch, easy to hand off, and built to actually get people to do something.",
  },
  {
    title: "Monthly Care",
    description:
      "I keep your site running. Copy updates, small fixes, new sections, handled the same day you ask. $20 a month, no contracts.",
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
              className="bg-surface border border-border rounded-2xl p-8 hover:border-amber/40 transition-colors"
            >
              <div className="text-amber mb-6">{ICONS[i]}</div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
