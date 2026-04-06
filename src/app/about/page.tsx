import CTA from "@/components/CTA";

export default function About() {
  return (
    <main className="pt-16">
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="relative">
                  <img
                    src="/images/headshot.jpeg"
                    alt="Spencer Hanson"
                    className="w-full aspect-square object-cover rounded-xl ring-1 ring-white/10"
                  />
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full" />
                  <p className="text-white/40 text-sm">Currently accepting new clients</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-gold-500 text-xs uppercase tracking-wider mb-4">About</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight">
                Spencer Hanson
              </h1>

              <div className="space-y-5 text-white/50 leading-relaxed">
                <p>
                  I got into life insurance because I kept seeing people get sold
                  policies they didn't need at prices they shouldn't pay. There's
                  a better way to do this.
                </p>
                <p>
                  I'm an independent broker — not captive to any single carrier.
                  That means I work for you, not an insurance company. I shop
                  multiple carriers, compare rates, and recommend what actually
                  fits your situation.
                </p>
                <p>
                  I work alongside my team at Solace Financial, which gives us
                  access to a wide network of top-rated carriers and the
                  relationships to get things done efficiently.
                </p>
                <p>
                  Whether you need a simple term policy to cover your mortgage or
                  a permanent policy for estate planning, I'll walk you through
                  your options without the sales pitch.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <h3 className="text-white font-medium text-sm mb-6">The basics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/20 text-xs uppercase tracking-wider mb-1">Role</p>
                    <p className="text-white/60 text-sm">Independent Life Insurance Broker</p>
                  </div>
                  <div>
                    <p className="text-white/20 text-xs uppercase tracking-wider mb-1">Team</p>
                    <p className="text-white/60 text-sm">Solace Financial</p>
                  </div>
                  <div>
                    <p className="text-white/20 text-xs uppercase tracking-wider mb-1">Coverage</p>
                    <p className="text-white/60 text-sm">All 50 states</p>
                  </div>
                  <div>
                    <p className="text-white/20 text-xs uppercase tracking-wider mb-1">Carriers</p>
                    <p className="text-white/60 text-sm">20+ top-rated companies</p>
                  </div>
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
