import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />

      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
            <div className="bg-navy-950 p-8">
              <p className="text-white/30 text-xs uppercase tracking-wider mb-3">How it works</p>
              <h3 className="text-white font-semibold text-lg mb-2">Tell me what you need</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                A quick conversation is all it takes. I'll ask the right questions and figure out what actually matters for your situation.
              </p>
            </div>
            <div className="bg-navy-950 p-8">
              <p className="text-white/30 text-xs uppercase tracking-wider mb-3">The difference</p>
              <h3 className="text-white font-semibold text-lg mb-2">I shop around so you don't have to</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Most people get quoted by one carrier and call it a day. I compare 20+ to make sure you're getting the best deal available.
              </p>
            </div>
            <div className="bg-navy-950 p-8">
              <p className="text-white/30 text-xs uppercase tracking-wider mb-3">The result</p>
              <h3 className="text-white font-semibold text-lg mb-2">Coverage that fits your life</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Not a one-size-fits-all policy. Something built around your family, your budget, and your actual goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold-500 text-xs uppercase tracking-wider mb-4">What I offer</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
                Coverage for every stage of life
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Term Life", desc: "Affordable coverage for a set period. Best for families on a budget." },
                  { title: "Whole Life", desc: "Permanent coverage with cash value that grows over time." },
                  { title: "Universal Life", desc: "Flexible premiums and death benefits that adapt with you." },
                  { title: "Final Expense", desc: "Simple coverage to protect your family from end-of-life costs." },
                  { title: "Indexed Universal", desc: "Cash value tied to market indexes — growth potential with a floor." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1 bg-gold-500/30 rounded-full flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-medium text-sm mb-0.5">{item.title}</h4>
                      <p className="text-white/30 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-900 border border-white/5 rounded-xl p-8">
              <p className="text-white/30 text-xs uppercase tracking-wider mb-6">Why independent</p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Not tied to one carrier</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Captive agents sell you what their company offers. I sell you what's actually best for you.
                  </p>
                </div>
                <div className="border-t border-white/5 pt-6">
                  <h4 className="text-white font-medium text-sm mb-1">Backed by Solace Financial</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    I work alongside a team with deep carrier relationships and decades of combined experience.
                  </p>
                </div>
                <div className="border-t border-white/5 pt-6">
                  <h4 className="text-white font-medium text-sm mb-1">Nationwide reach</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Licensed across all 50 states. Wherever you are, I can help.
                  </p>
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
