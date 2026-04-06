export default function Contact() {
  return (
    <main className="pt-16">
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-gold-500 text-xs uppercase tracking-wider mb-4">Contact</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                Let's talk
              </h1>
              <p className="text-white/40 mb-10 leading-relaxed max-w-md">
                Drop me a line and I'll get back to you within 24 hours. No
                pressure, no obligation — just a conversation about what you need.
              </p>

              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-white/30 text-xs uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-navy-900 border border-white/5 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-white/30 text-xs uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-navy-900 border border-white/5 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors text-sm"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white/30 text-xs uppercase tracking-wider mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-navy-900 border border-white/5 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors text-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/30 text-xs uppercase tracking-wider mb-2">
                    What are you looking for?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-navy-900 border border-white/5 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors resize-none text-sm"
                    placeholder="Tell me a bit about your situation..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-navy-950 font-medium px-6 py-3 rounded-lg hover:bg-white/90 transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <div className="bg-navy-900 border border-white/5 rounded-xl p-8 mb-6">
                <h3 className="text-white font-medium text-sm mb-6">Direct contact</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-white/20 text-xs uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-white/60 text-sm">(555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-white/20 text-xs uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white/60 text-sm">spencer@example.com</p>
                  </div>
                  <div>
                    <p className="text-white/20 text-xs uppercase tracking-wider mb-1">Service area</p>
                    <p className="text-white/60 text-sm">All 50 states</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 border border-white/5 rounded-xl p-8">
                <h3 className="text-white font-medium text-sm mb-6">What to expect</h3>
                <div className="space-y-4">
                  {[
                    "Free consultation — no strings attached",
                    "Personalized quote comparison",
                    "Honest guidance, zero pressure",
                    "Response within 24 hours",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-white/40 text-sm">{item}</p>
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
