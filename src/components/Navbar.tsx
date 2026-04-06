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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt=""
              className="w-8 h-8 rounded-full object-cover ring-1 ring-white/10"
            />
            <span className="text-white font-semibold text-sm tracking-tight">
              Spencer Hanson
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-white text-navy-950 font-medium px-4 py-2 rounded-lg text-sm hover:bg-white/90 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

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
        <div className="md:hidden bg-navy-900 border-t border-white/5">
          <div className="px-5 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-white/50 hover:text-white transition-colors text-sm py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block bg-white text-navy-950 font-medium px-4 py-2.5 rounded-lg text-sm text-center mt-4"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
