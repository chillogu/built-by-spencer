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
          <span className="text-ink-900">Your family&apos;s future,</span>
          <br />
          <span className="text-ink-300">properly protected.</span>
        </h1>

        <p className="text-ink-600 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I&apos;m Spencer Hanson — an independent life insurance broker who
          shops top-rated carriers to find the right coverage for you. No
          pressure, no runaround. Just clear answers.
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

        {/* Carrier logos strip */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-[10px] text-ink-400 uppercase tracking-[0.25em] font-semibold">
            Trusted carriers I work with
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {["Americo", "National Life Group", "Mutual of Omaha"].map((name) => (
              <span key={name} className="text-ink-500 font-semibold text-sm tracking-tight">
                {name}
              </span>
            ))}
            <span className="text-ink-300 text-xs italic">+ more coming soon</span>
          </div>
        </div>
      </div>

      {/* Full-width photo */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pb-0">
        <div className="relative rounded-2xl overflow-hidden border border-ink-100 shadow-2xl shadow-ink-900/10">
          <img
            src="/images/headshot.jpeg"
            alt="Spencer Hanson — Independent Insurance Broker"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between">
            <div>
              <div className="text-white font-bold text-xl sm:text-2xl tracking-tight">Spencer Hanson</div>
              <div className="text-brand-200 text-sm mt-0.5">Independent Insurance Broker · Solace Financial</div>
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-brand-200 text-[10px] uppercase tracking-widest font-semibold">NPN</div>
              <div className="text-white font-mono text-sm font-semibold">22179707</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-ink-100 bg-white mt-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 divide-x divide-ink-100 text-center">
            <div className="px-4">
              <div className="text-2xl font-bold text-ink-900">3</div>
              <div className="text-xs text-ink-500 uppercase tracking-wider mt-1 font-medium">Top carriers</div>
            </div>
            <div className="px-4">
              <div className="text-2xl font-bold text-ink-900">3</div>
              <div className="text-xs text-ink-500 uppercase tracking-wider mt-1 font-medium">States licensed</div>
            </div>
            <div className="px-4">
              <div className="text-2xl font-bold text-brand-900">Free</div>
              <div className="text-xs text-ink-500 uppercase tracking-wider mt-1 font-medium">Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
