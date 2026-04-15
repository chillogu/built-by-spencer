import CTA from "@/components/CTA";

export default function About() {
  return (
    <main className="pt-16">
      <section className="border-t border-cream-100/10 bg-charcoal-950">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="relative">
                  <div className="absolute -inset-3 bg-tan-500/20" />
                  <img
                    src="/images/headshot.jpeg"
                    alt="Spencer Hanson"
                    className="relative w-full aspect-square object-cover ring-1 ring-cream-100/10"
                  />
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-2 h-2 bg-tan-500" />
                  <p className="text-cream-100/50 text-sm uppercase tracking-wider font-semibold">Currently accepting new clients</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-tan-500 text-xs uppercase tracking-[0.2em] font-semibold mb-4">About</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight text-cream-100">
                Spencer Hanson
              </h1>

              <div className="space-y-5 text-cream-100/60 leading-relaxed">
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

              <div className="mt-10 pt-8 border-t border-cream-100/10">
                <h3 className="text-cream-100 font-semibold text-sm mb-6 uppercase tracking-wider">The basics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-tan-500 text-xs uppercase tracking-wider font-semibold mb-1">Role</p>
                    <p className="text-cream-100/80 text-sm">Independent Life Insurance Broker</p>
                  </div>
                  <div>
                    <p className="text-tan-500 text-xs uppercase tracking-wider font-semibold mb-1">Team</p>
                    <p className="text-cream-100/80 text-sm">Solace Financial</p>
                  </div>
                  <div>
                    <p className="text-tan-500 text-xs uppercase tracking-wider font-semibold mb-1">Coverage</p>
                    <p className="text-cream-100/80 text-sm">All 50 states</p>
                  </div>
                  <div>
                    <p className="text-tan-500 text-xs uppercase tracking-wider font-semibold mb-1">Carriers</p>
                    <p className="text-cream-100/80 text-sm">20+ top-rated companies</p>
                  </div>
                  <div>
                    <p className="text-tan-500 text-xs uppercase tracking-wider font-semibold mb-1">National Producer Number</p>
                    <p className="text-cream-100/80 text-sm">22179707</p>
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
