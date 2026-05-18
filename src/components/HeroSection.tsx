"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";

const HeroOrb = dynamic(() => import("./HeroOrb"), { ssr: false });

const HEADLINE_LINES = [
  "I build websites",
  "people actually",
  "notice.",
];

export default function HeroSection() {
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const els = linesRef.current.filter(Boolean) as HTMLSpanElement[];
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
      {/* Ambient amber glow */}
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
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
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {HEADLINE_LINES.map((line, i) => (
                <span
                  key={i}
                  className="block overflow-hidden"
                >
                  <span
                    ref={(el) => { linesRef.current[i] = el; }}
                    className={`block ${i === HEADLINE_LINES.length - 1 ? "text-gradient-amber" : ""}`}
                  >
                    {line}
                  </span>
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

          {/* Right: 3D orb — desktop only */}
          <div className="hidden lg:block relative h-[500px]">
            <HeroOrb />
          </div>
        </div>
      </div>
    </section>
  );
}
