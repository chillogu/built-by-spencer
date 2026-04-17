import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />

      {/* Problem / value prop */}
      <section className="bg-white border-t border-ink-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-brand-700 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                The problem
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-[1.1] text-ink-900">
                Most people are overpaying — or underprotected.
              </h2>
              <div className="space-y-4 text-ink-600 leading-relaxed">
                <p>
                  People take the first policy they&apos;re quoted, never compare,
                  and find out too late that their family isn&apos;t covered the
                  way they thought — or they&apos;re paying twice what they
                  should.
                </p>
                <p>
                  As an independent broker, I work{" "}
                  <strong className="text-ink-900">for you</strong> — not an
                  insurance company. I compare top-rated carriers and match you
                  with coverage that actually fits your situation, your health,
                  and your budget.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {[
                {
                  stat: "1 in 3",
                  label: "Americans have no life insurance at all",
                },
                {
                  stat: "43%",
                  label: "Of families would struggle financially within 6 months",
                },
                {
                  stat: "~$30/mo",
                  label: "Average term policy for a healthy 30-year-old",
                },
                {
                  stat: "Free",
                  label: "Cost to compare quotes with an independent broker",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-ink-200 rounded-xl p-6 hover:border-brand-900/30 hover:shadow-md transition-all"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-brand-900 mb-2 tracking-tight">
                    {item.stat}
                  </div>
                  <div className="text-ink-600 text-sm leading-relaxed">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ink-50/70 border-y border-ink-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-2xl mb-16">
            <p className="text-brand-700 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-900 leading-[1.1]">
              Simple. Clear. No pressure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "We talk",
                body: "A quick, no-pressure conversation about your situation. I ask the right questions to figure out what you actually need — not what looks good on paper.",
              },
              {
                num: "02",
                title: "I do the work",
                body: "I shop top carriers, compare rates, and pull together options that match your goals, health, and budget. You get better choices without lifting a finger.",
              },
              {
                num: "03",
                title: "You decide",
                body: "I lay out your options clearly — trade-offs included. No jargon, no pressure. You make a confident decision knowing exactly what you're getting.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-xl p-8 border border-ink-100 hover:border-brand-900/20 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-brand-900 rounded-md flex items-center justify-center text-white font-bold text-sm">
                    {step.num}
                  </div>
                  <div className="flex-1 h-px bg-ink-100" />
                </div>
                <h3 className="text-ink-900 font-semibold text-xl mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-ink-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good fit / Why Spencer */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6">
              <p className="text-brand-700 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                Is this right for you?
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-ink-900 leading-[1.1]">
                This probably sounds like you.
              </h2>
              <div className="space-y-4">
                {[
                  "You have no idea how much coverage you actually need",
                  "You already have a policy but haven't looked at it in years",
                  "You want a second opinion before you commit",
                  "You're tired of confusing jargon and want straight answers",
                  "You want to protect your family without overpaying",
                  "You've been putting this off and know it's time",
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
                    <p className="text-ink-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="bg-brand-900 rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-700/40 rounded-full blur-2xl" />
                <div className="relative">
                  <p className="text-brand-200 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
                    Why Spencer
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-base mb-1.5">
                        Independent — not captive
                      </h4>
                      <p className="text-brand-100 text-sm leading-relaxed">
                        Captive agents sell you what their one company offers. I
                        work across carriers and find what&apos;s actually best
                        for you.
                      </p>
                    </div>
                    <div className="border-t border-brand-700/60 pt-5">
                      <h4 className="font-semibold text-base mb-1.5">
                        Backed by Solace Financial
                      </h4>
                      <p className="text-brand-100 text-sm leading-relaxed">
                        Deep carrier relationships and the infrastructure to get
                        it done right.
                      </p>
                    </div>
                    <div className="border-t border-brand-700/60 pt-5">
                      <h4 className="font-semibold text-base mb-1.5">
                        Licensed in NY, TX, and OH
                      </h4>
                      <p className="text-brand-100 text-sm leading-relaxed">
                        If you&apos;re in New York, Texas, or Ohio — I can help.
                        More states coming soon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-ink-200">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/headshot.jpeg"
                    alt="Spencer"
                    className="w-12 h-12 rounded-md object-cover object-top"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-ink-900 text-sm">
                      Spencer Hanson
                    </div>
                    <div className="text-ink-500 text-xs">(914) 454-1515</div>
                    <div className="text-ink-500 text-xs">me@protectedwithspencer.com</div>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-brand-900 text-white font-semibold px-5 py-2.5 rounded-md text-sm hover:bg-brand-800 transition-colors whitespace-nowrap"
                  >
                    Let&apos;s talk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Stop putting this off."
        description="One conversation. That's all it takes to figure out where you stand. Free, no obligation, no pressure."
        buttonText="Talk with Spencer"
      />
    </main>
  );
}
