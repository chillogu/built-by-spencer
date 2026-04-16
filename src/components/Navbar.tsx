"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/about", label: "About" },
    { href: "/carriers", label: "Carriers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-ink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/images/headshot.jpeg" alt="Spencer Hanson" className="w-8 h-8 rounded-md object-cover object-top" />
            <div className="leading-tight">
              <span className="text-ink-900 font-semibold text-sm tracking-tight block">
                Spencer Hanson
              </span>
              <span className="text-ink-500 text-[10px] uppercase tracking-[0.15em] block">
                Insurance Broker
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink-600 hover:text-brand-900 transition-colors text-sm font-medium px-4 py-2 rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 bg-brand-900 text-white font-semibold px-5 py-2 text-sm rounded-md hover:bg-brand-800 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-ink-700 p-2"
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
        <div className="md:hidden bg-white border-t border-ink-100">
          <div className="px-6 py-5 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-ink-700 hover:text-brand-900 transition-colors text-sm font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block bg-brand-900 text-white font-semibold px-5 py-3 text-sm rounded-md text-center mt-3"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
