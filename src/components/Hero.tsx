import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gold-600/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3 py-1 mb-8">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                Independent Broker
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Life insurance
              <br />
              <span className="text-white/40">that actually</span>
              <br />
              makes sense.
            </h1>

            <p className="text-white/40 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
              I'm Spencer Hanson. I help people understand their options, compare
              carriers, and get the right coverage — without the pressure or the
              runaround.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link
                href="/contact"
                className="bg-white text-navy-950 font-medium px-6 py-3 rounded-lg hover:bg-white/90 transition-colors text-sm"
              >
                Talk with Spencer
              </Link>
              <Link
                href="/about"
                className="text-white/40 hover:text-white transition-colors text-sm py-3 flex items-center gap-1.5"
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
              <div className="absolute -inset-3 bg-gradient-to-br from-gold-500/10 to-transparent rounded-2xl" />
              <img
                src="/images/headshot.jpeg"
                alt="Spencer Hanson"
                className="relative w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl ring-1 ring-white/10"
              />
              <div className="absolute -bottom-3 -left-3 bg-navy-800 border border-white/5 rounded-lg px-3 py-2 text-xs">
                <span className="text-gold-500 font-semibold">20+</span>
                <span className="text-white/40 ml-1.5">carriers</span>
              </div>
              <div className="absolute -top-3 -right-3 bg-navy-800 border border-white/5 rounded-lg px-3 py-2 text-xs">
                <span className="text-gold-500 font-semibold">50</span>
                <span className="text-white/40 ml-1.5">states</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
