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
            className="font-bold text-white text-lg tracking-tight"
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
