import CTA from "@/components/CTA";

export default function About() {
  return (
    <main className="pt-16">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <div className="relative rounded-xl overflow-hidden border border-ink-200 bg-white shadow-lg">
                  <img
                    src="/images/headshot.jpeg"
                    alt="Spencer Hanson"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                  <div className="p-5 border-t border-ink-100 bg-white">
                    <div className="text-ink-900 font-semibold text-base">
                      Spencer Hanson
                    </div>
                    <div className="text-ink-500 text-xs mt-0.5">
                      Independent Insurance Broker
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2.5 bg-brand-50 rounded-md px-4 py-3 border border-brand-100">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <p className="text-brand-900 text-xs font-semibold uppercase tracking-wider">
                    Currently accepting new clients
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-brand-700 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                About
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-ink-900 leading-[1.05]">
                Spencer Hanson
              </h1>

              <div className="space-y-5 text-ink-600 leading-relaxed text-lg">
                <p>
                  I got into life insurance because I kept seeing people get
                  sold policies they didn&apos;t need at prices they
                  shouldn&apos;t pay. There&apos;s a better way to do this.
                </p>
                <p>
                  I&apos;m an independent broker — not captive to any single
                  carrier. That means I work for you, not an insurance company.
                  I shop multiple carriers, compare rates, and recommend what
                  actually fits your situation.
                </p>
                <p>
                  I work alongside my team at Solace Financial, which gives us
                  access to top-rated carriers and the relationships to get
                  things done efficiently.
                </p>
                <p>
                  Whether you need a simple term policy to cover your mortgage
                  or a permanent policy for estate planning, I&apos;ll walk you
                  through your options without the sales pitch.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-ink-100">
                <h3 className="text-ink-900 font-semibold text-sm mb-6 uppercase tracking-[0.15em]">
                  The basics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Role", value: "Independent Life Insurance Broker" },
                    { label: "Team", value: "Solace Financial" },
                    { label: "Licensed in", value: "New York, Texas, Ohio" },
                    { label: "Carriers", value: "3 top-rated (expanding)" },
                    { label: "National Producer Number", value: "22179707" },
                    { label: "Phone", value: "(914) 454-1515" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="bg-white rounded-md p-4 border border-ink-200 hover:border-brand-900/20 transition-colors"
                    >
                      <p className="text-brand-700 text-[10px] uppercase tracking-[0.15em] font-semibold mb-1.5">
                        {label}
                      </p>
                      <p className="text-ink-900 text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
