export default function Contact() {
  return (
    <main className="pt-16">
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <p className="text-brand-700 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            Get in touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-ink-900 leading-[1.05]">
            Let&apos;s talk.
          </h1>
          <p className="text-ink-600 mb-12 leading-relaxed text-lg max-w-xl">
            No pressure, no obligation — just a real conversation about what
            you need.
          </p>

          <div className="space-y-4">
            <div className="bg-brand-900 rounded-xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-brand-700/40 rounded-full blur-2xl" />
              <div className="relative">
                <h3 className="font-semibold text-xs mb-6 uppercase tracking-[0.2em] text-brand-200">
                  Direct contact
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-800/80 border border-brand-700/60 rounded-md flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-brand-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-brand-300 text-[10px] uppercase tracking-[0.15em] font-semibold">
                        Phone
                      </p>
                      <p className="text-white text-sm font-semibold">
                        (914) 454-1515
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-800/80 border border-brand-700/60 rounded-md flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-brand-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-brand-300 text-[10px] uppercase tracking-[0.15em] font-semibold">
                        Email
                      </p>
                      <p className="text-white text-sm font-semibold truncate">
                        me@protectedwithspencer.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-800/80 border border-brand-700/60 rounded-md flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-brand-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-brand-300 text-[10px] uppercase tracking-[0.15em] font-semibold">
                        Licensed in
                      </p>
                      <p className="text-white text-sm font-semibold">
                        New York · Texas · Ohio
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-brand-700/60">
                  <a
                    href="https://calendar.notion.so/meet/spencerhanson/insurance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-brand-900 font-semibold px-6 py-3 rounded-md hover:bg-brand-50 transition-colors text-sm"
                  >
                    Schedule a Call
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-ink-200">
              <h3 className="text-ink-900 font-semibold text-sm mb-5 uppercase tracking-[0.15em]">
                What to expect
              </h3>
              <div className="space-y-3">
                {[
                  "Free consultation — no strings attached",
                  "Personalized quote comparison across top carriers",
                  "Honest guidance, zero pressure",
                  "Response within 24 hours",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-brand-100 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-brand-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-ink-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
