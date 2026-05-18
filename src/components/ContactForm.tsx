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
              <p className="text-red-400 text-sm">Something went wrong. Try emailing me directly.</p>
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
