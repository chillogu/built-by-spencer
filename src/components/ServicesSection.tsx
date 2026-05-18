"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Full Websites",
    description:
      "A complete site, designed and built from scratch. On your domain, deployed, and ready on day one. No templates, no shortcuts.",
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
      "I keep your site running. Copy updates, small fixes, new sections, handled the same day you ask. $20 a month, no contracts.",
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
              className="bg-surface border border-border rounded-2xl p-8 hover:border-amber/40 transition-colors"
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
