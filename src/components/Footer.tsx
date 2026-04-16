import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white border-t border-ink-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <img src="/images/headshot.jpeg" alt="Spencer Hanson" className="w-9 h-9 rounded-md object-cover object-top" />
              <div>
                <span className="text-white font-semibold text-sm block">
                  Spencer Hanson
                </span>
                <span className="text-ink-400 text-[10px] uppercase tracking-[0.15em]">
                  Independent Insurance Broker
                </span>
              </div>
            </div>
            <p className="text-ink-400 text-sm leading-relaxed max-w-sm">
              Working alongside Solace Financial to help clients in New York,
              Texas, and Ohio find the right coverage.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-5">
              Navigate
            </h4>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/carriers", label: "Carriers" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-ink-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:9144541515"
                className="block text-ink-400 hover:text-white transition-colors text-sm"
              >
                (914) 454-1515
              </a>
              <a
                href="mailto:me@protectedwithspencer.com"
                className="block text-ink-400 hover:text-white transition-colors text-sm"
              >
                me@protectedwithspencer.com
              </a>
              <p className="text-ink-500 text-sm">Licensed: NY · TX · OH</p>
              <p className="text-ink-500 text-xs font-mono">NPN 22179707</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-ink-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-ink-500 text-xs">
            &copy; {new Date().getFullYear()} Spencer Hanson. All rights reserved.
          </p>
          <p className="text-ink-600 text-xs">protectedwithspencer.com</p>
        </div>
      </div>
    </footer>
  );
}
