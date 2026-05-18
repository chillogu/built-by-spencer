"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section className="bg-surface py-32 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-72 h-72 mx-auto lg:mx-0">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #F59E0B22, #F9731622)",
                  transform: "rotate(3deg)",
                }}
              />
              <Image
                src="/images/headshot.jpeg"
                alt="Spencer"
                fill
                className="object-cover object-top rounded-2xl relative z-10"
                sizes="288px"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-amber text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              Who&apos;s building this
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              A college student, not an agency.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m Spencer, a college student who builds websites on the side.
                I&apos;m not trying to bill you $5,000 and disappear. I do this to build
                my portfolio and get real experience. That means you get a serious website
                without paying agency prices.
              </p>
              <p>
                I&apos;ve already built sites for insurance brokers, agencies, and
                small businesses. Every one of them is live, fast, and looks like it
                cost way more than it did.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/headshot.jpeg"
                  alt="Spencer"
                  width={40}
                  height={40}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Spencer Hanson</p>
                <p className="text-muted text-xs">me@protectedwithspencer.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
