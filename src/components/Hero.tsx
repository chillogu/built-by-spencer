import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-charcoal-950">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 border border-cream-100/15 px-3 py-1 mb-8">
              <span className="w-1.5 h-1.5 bg-tan-500" />
              <span className="text-cream-100/60 text-xs font-semibold uppercase tracking-wider">
                Independent Broker
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-6 tracking-tight text-cream-100">
              Life insurance
              <br />
              <span className="text-tan-500">that actually</span>
              <br />
              makes sense.
            </h1>

            <p className="text-cream-100/60 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
              I'm Spencer Hanson. I help people understand their options, compare
              carriers, and get the right coverage — without the pressure or the
              runaround.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link
                href="/contact"
                className="bg-tan-500 text-charcoal-950 font-semibold px-6 py-3 hover:bg-tan-400 transition-colors text-sm uppercase tracking-wider"
              >
                Talk with Spencer
              </Link>
              <Link
                href="/about"
                className="text-cream-100/60 hover:text-cream-100 transition-colors text-sm uppercase tracking-wider py-3 flex items-center gap-1.5 font-semibold"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 bg-tan-500/20" />
              <img
                src="/images/headshot.jpeg"
                alt="Spencer Hanson"
                className="relative w-64 h-64 sm:w-72 sm:h-72 object-cover ring-1 ring-cream-100/10"
              />
              <div className="absolute -bottom-3 -left-3 bg-charcoal-900 border border-cream-100/10 px-3 py-2 text-xs">
                <span className="text-tan-400 font-bold">20+</span>
                <span className="text-cream-100/50 ml-1.5 uppercase tracking-wider">carriers</span>
              </div>
              <div className="absolute -top-3 -right-3 bg-charcoal-900 border border-cream-100/10 px-3 py-2 text-xs">
                <span className="text-tan-400 font-bold">50</span>
                <span className="text-cream-100/50 ml-1.5 uppercase tracking-wider">states</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
