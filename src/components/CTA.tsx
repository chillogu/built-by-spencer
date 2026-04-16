import Link from "next/link";

export default function CTA({
  title = "Let's figure this out together.",
  description = "Free consultation. No obligation. Takes about 15 minutes.",
  buttonText = "Get a Free Quote",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
}) {
  return (
    <section className="bg-brand-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-700/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-brand-100 text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-900 font-semibold px-7 py-3.5 rounded-md hover:bg-brand-50 transition-colors text-sm shadow-lg"
            >
              {buttonText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href="https://calendar.notion.so/meet/spencerhanson/insurance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-brand-600/60 text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white/5 transition-colors text-sm"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
