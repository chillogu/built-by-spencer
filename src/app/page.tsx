import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />

      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-gold-500 text-xs uppercase tracking-wider mb-4">Here's the truth</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight leading-snug">
              Most people are either overpaying for life insurance or they don't have enough. Either way, they're losing.
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                They buy the first policy they're quoted. They don't compare. They don't ask questions. And then they find out later they could've gotten twice the coverage for the same price — or they find out their family isn't actually protected when it matters.
              </p>
              <p>
                That's where I come in. I'm an independent broker. I don't work for an insurance company — I work for you. I compare 20+ carriers, I look at your actual situation, and I put together the right coverage at the right price. Not what one company wants to sell you. What's actually best for you.
              </p>
              <p>
                Simple as that.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <p className="text-gold-500 text-xs uppercase tracking-wider mb-4">How I help</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 tracking-tight">
            Three steps. That's it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
            <div className="bg-navy-950 p-8">
              <div className="text-gold-500 text-4xl font-bold mb-4">01</div>
              <h3 className="text-white font-semibold text-lg mb-2">We talk</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                A quick conversation. I'll ask the right questions, understand your situation, and figure out what you actually need — not what looks good on paper.
              </p>
            </div>
            <div className="bg-navy-950 p-8">
              <div className="text-gold-500 text-4xl font-bold mb-4">02</div>
              <h3 className="text-white font-semibold text-lg mb-2">I do the work</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                I shop 20+ carriers, compare rates, and put together options that fit your goals, your health, and your budget. You don't lift a finger.
              </p>
            </div>
            <div className="bg-navy-950 p-8">
              <div className="text-gold-500 text-4xl font-bold mb-4">03</div>
              <h3 className="text-white font-semibold text-lg mb-2">You decide</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                I lay out your options clearly — the good, the bad, the tradeoffs. No pressure. No confusion. You make the call with full confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold-500 text-xs uppercase tracking-wider mb-4">Good fit if</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 tracking-tight">
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
                    <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/60 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-900 border border-white/5 rounded-xl p-8">
              <p className="text-white/30 text-xs uppercase tracking-wider mb-6">Why Spencer</p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Independent — not captive</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Captive agents sell you what their company offers. I sell you what's actually best for you. Big difference.
                  </p>
                </div>
                <div className="border-t border-white/5 pt-6">
                  <h4 className="text-white font-medium text-sm mb-1">Backed by Solace Financial</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Deep carrier relationships. Decades of combined experience. The infrastructure to get it done right.
                  </p>
                </div>
                <div className="border-t border-white/5 pt-6">
                  <h4 className="text-white font-medium text-sm mb-1">All 50 states</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
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
