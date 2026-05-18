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
              A complete website, designed, built, and deployed. You bring the idea. I handle everything else.
            </p>
          </div>

          <div className="border border-border rounded-2xl p-10">
            <div
              className="text-6xl lg:text-7xl font-bold text-gradient-amber mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              $20<span className="text-3xl text-muted font-normal">/mo</span>
            </div>
            <p className="text-white font-semibold text-lg mb-2">To keep it running</p>
            <p className="text-muted text-sm leading-relaxed">
              Updates, fixes, and small changes, handled same-day. No retainer contracts, cancel whenever.
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
