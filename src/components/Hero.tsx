import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Main hero content — centered */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-20 pb-16 text-center">

        {/* Social proof pill */}
        <div className="inline-flex items-center gap-3 mb-10">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-brand-900 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold">NY</div>
            <div className="w-7 h-7 rounded-full bg-brand-700 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold">TX</div>
            <div className="w-7 h-7 rounded-full bg-brand-500 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold">OH</div>
          </div>
          <span className="text-ink-600 text-sm font-medium">Licensed in New York, Texas &amp; Ohio</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          <span className="text-ink-900">Life insurance</span>
          <br />
          <span className="text-ink-900">that actually </span>
          <span className="text-brand-900">fits.</span>
        </h1>

        <p className="text-ink-600 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I&apos;m Spencer — an independent broker who compares
          top-rated carriers to find coverage that matches your life, your
          health, and your budget. Free consultation, no obligation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-800 transition-colors text-sm shadow-lg shadow-brand-900/25 w-full sm:w-auto justify-center"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-ink-700 font-semibold text-sm underline underline-offset-4 decoration-ink-300 hover:text-brand-900 hover:decoration-brand-900 transition-colors"
          >
            Learn about Spencer
          </Link>
        </div>

        {/* Trust strip */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-[10px] text-ink-400 uppercase tracking-[0.25em] font-semibold">
            Comparing carriers including
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {["Americo", "National Life Group", "Mutual of Omaha"].map((name) => (
              <span key={name} className="text-ink-400 font-medium text-sm tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Headshot card */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pb-0">
        <div className="flex items-center gap-5 bg-white border border-ink-200 rounded-xl px-6 py-4 shadow-sm w-fit mx-auto">
          <img
            src="/images/headshot.jpeg"
            alt="Spencer Hanson"
            className="w-14 h-14 rounded-lg object-cover object-top"
          />
          <div>
            <div className="text-ink-900 font-semibold text-base tracking-tight">Spencer Hanson</div>
            <div className="text-ink-500 text-sm">Independent Insurance Broker · Solace Financial</div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 border-t border-ink-100 bg-ink-50/50 mt-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap text-xs text-ink-500 font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Licensed &amp; verified — NPN 22179707</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-ink-200" />
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>NY · TX · OH</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-ink-200" />
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free consultation — no obligation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
