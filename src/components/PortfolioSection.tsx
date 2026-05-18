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
          Stuff I&apos;ve built.
        </h2>

        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="bg-surface border border-border rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:border-amber/30 transition-colors"
            >
              <div className={`p-10 flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber text-sm font-semibold hover:opacity-70 transition-opacity w-fit"
                >
                  View Live →
                </a>
              </div>

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
