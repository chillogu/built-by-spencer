import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />

      <section className="border-t border-charcoal-900/10 bg-cream-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-tan-700 text-xs uppercase tracking-[0.2em] font-semibold mb-4">Here's the truth</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight leading-snug text-charcoal-900">
              Most people are either overpaying for life insurance or haven't found affordable options. Either way, they're losing.
            </h2>
            <div className="space-y-4 text-charcoal-700 leading-relaxed">
              <p>
                Most people buy the first policy they're quoted, don't compare, and don't ask questions. Later, they learn they could have received twice the coverage for the same price, or discover their family isn't protected when it truly matters.
              </p>
              <p>
                That's where I come in. As an independent broker, I work for you—not an insurance company. By comparing more than 20 carriers and assessing your needs, I assemble the right coverage at the right price. My aim: offer what's actually best for you, not just what one company wants to sell.
              </p>
              <p>
                It really is that straightforward. Let me walk you through how I make the process easy and effective for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal-900/10 bg-cream-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal-900/10">
            <div className="bg-cream-50 p-8">
              <div className="text-tan-600 text-4xl font-bold mb-4">01</div>
              <h3 className="text-charcoal-900 font-semibold text-lg mb-2">We talk</h3>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                In a quick conversation, I ask the right questions, understand your situation, and determine what you truly need—not just what looks good on paper.
              </p>
            </div>
            <div className="bg-cream-50 p-8">
              <div className="text-tan-600 text-4xl font-bold mb-4">02</div>
              <h3 className="text-charcoal-900 font-semibold text-lg mb-2">I do the work</h3>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                I shop 20+ carriers, compare rates, and present tailored options that align with your goals, health, and budget—often uncovering policies you wouldn't find on your own. You get better choices without lifting a finger.
              </p>
            </div>
            <div className="bg-cream-50 p-8">
              <div className="text-tan-600 text-4xl font-bold mb-4">03</div>
              <h3 className="text-charcoal-900 font-semibold text-lg mb-2">You decide</h3>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                I lay out your options clearly—the good, the bad, and the trade-offs—so you understand exactly what each policy means for you. With no pressure or confusion, you make confident decisions knowing the options truly fit your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal-900/10 bg-cream-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-tan-700 text-xs uppercase tracking-[0.2em] font-semibold mb-4">Good fit if</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 tracking-tight text-charcoal-900">
                This sounds like you
              </h2>
              <div className="space-y-4">
                {[
                  "You have no idea how much coverage you actually need",
                  "You already have a policy but haven't looked at it in years",
                  "You want a second opinion before you commit",
                  "You're tired of confusing insurance jargon and just want straight answers",
                  "You want to protect your family without overpaying",
                  "You've been putting this off and you know it's time to deal with it",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-tan-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-charcoal-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream-100 border border-charcoal-900/10 p-8">
              <p className="text-tan-700 text-xs uppercase tracking-[0.2em] font-semibold mb-6">Why Spencer</p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-charcoal-900 font-semibold text-sm mb-1">Independent — not captive</h4>
                  <p className="text-charcoal-700 text-sm leading-relaxed">
                    Captive agents sell you what their company offers. I sell you what's actually best for you. Big difference.
                  </p>
                </div>
                <div className="border-t border-charcoal-900/10 pt-6">
                  <h4 className="text-charcoal-900 font-semibold text-sm mb-1">Backed by Solace Financial</h4>
                  <p className="text-charcoal-700 text-sm leading-relaxed">
                    Deep carrier relationships. Decades of combined experience. The infrastructure to get it done right.
                  </p>
                </div>
                <div className="border-t border-charcoal-900/10 pt-6">
                  <h4 className="text-charcoal-900 font-semibold text-sm mb-1">All 50 states</h4>
                  <p className="text-charcoal-700 text-sm leading-relaxed">
                    Licensed nationwide. Wherever you are, I can help. No exceptions.
                  </p>
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
