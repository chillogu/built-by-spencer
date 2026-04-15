export default function Contact() {
  return (
    <main className="pt-16">
      <section className="border-t border-cream-100/10 bg-charcoal-950">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-tan-500 text-xs uppercase tracking-[0.2em] font-semibold mb-4">Contact</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-cream-100">
                Let's talk
              </h1>
              <p className="text-cream-100/60 mb-10 leading-relaxed max-w-md">
                Drop me a line and I'll get back to you within 24 hours. No
                pressure, no obligation — just a conversation about what you need.
              </p>

              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
                <input type="hidden" name="access_key" value="43b462cb-8c33-4780-98b7-9d813615bb4c" />
                <input type="hidden" name="subject" value="New quote request from protectedwithspencer.com" />
                <input type="checkbox" name="botcheck" className="hidden" />
                <div>
                  <label htmlFor="name" className="block text-tan-500 text-xs uppercase tracking-wider font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full bg-charcoal-900 border border-cream-100/15 px-4 py-3 text-cream-100 placeholder-cream-100/30 focus:outline-none focus:border-tan-500 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-tan-500 text-xs uppercase tracking-wider font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full bg-charcoal-900 border border-cream-100/15 px-4 py-3 text-cream-100 placeholder-cream-100/30 focus:outline-none focus:border-tan-500 transition-colors text-sm"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-tan-500 text-xs uppercase tracking-wider font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="w-full bg-charcoal-900 border border-cream-100/15 px-4 py-3 text-cream-100 placeholder-cream-100/30 focus:outline-none focus:border-tan-500 transition-colors text-sm"
                      placeholder="(914) 454-1515"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-tan-500 text-xs uppercase tracking-wider font-semibold mb-2">
                    What are you looking for?
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="w-full bg-charcoal-900 border border-cream-100/15 px-4 py-3 text-cream-100 placeholder-cream-100/30 focus:outline-none focus:border-tan-500 transition-colors resize-none text-sm"
                    placeholder="Tell me a bit about your situation..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-tan-500 text-charcoal-950 font-semibold px-6 py-3 hover:bg-tan-400 transition-colors text-sm uppercase tracking-wider"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <div className="bg-charcoal-900 border border-cream-100/10 p-8 mb-6">
                <h3 className="text-cream-100 font-semibold text-sm mb-6 uppercase tracking-wider">Direct contact</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-tan-500 text-xs uppercase tracking-wider font-semibold mb-1">Phone</p>
                    <p className="text-cream-100/80 text-sm">(914) 454-1515</p>
                  </div>
                  <div>
                    <p className="text-tan-500 text-xs uppercase tracking-wider font-semibold mb-1">Email</p>
                    <p className="text-cream-100/80 text-sm">me@protectedwithspencer.com</p>
                  </div>
                  <div>
                    <p className="text-tan-500 text-xs uppercase tracking-wider font-semibold mb-1">Service area</p>
                    <p className="text-cream-100/80 text-sm">All 50 states</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-cream-100/10">
                  <a
                    href="https://calendar.notion.so/meet/spencerhanson/insurance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-tan-500 text-charcoal-950 font-semibold px-6 py-3 hover:bg-tan-400 transition-colors text-sm uppercase tracking-wider text-center w-full"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>

              <div className="bg-charcoal-900 border border-cream-100/10 p-8">
                <h3 className="text-cream-100 font-semibold text-sm mb-6 uppercase tracking-wider">What to expect</h3>
                <div className="space-y-4">
                  {[
                    "Free consultation — no strings attached",
                    "Personalized quote comparison",
                    "Honest guidance, zero pressure",
                    "Response within 24 hours",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-tan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-cream-100/60 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
