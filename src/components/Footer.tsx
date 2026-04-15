import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-cream-100/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt=""
              className="w-6 h-6 object-cover ring-1 ring-cream-100/10"
            />
            <div>
              <span className="text-cream-100 text-sm font-semibold">Spencer Hanson</span>
              <p className="text-cream-100/30 text-xs">Independent Life Insurance Broker</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="text-cream-100/40 hover:text-tan-400 transition-colors text-xs uppercase tracking-wider">
              About
            </Link>
            <Link href="/carriers" className="text-cream-100/40 hover:text-tan-400 transition-colors text-xs uppercase tracking-wider">
              Carriers
            </Link>
            <Link href="/contact" className="text-cream-100/40 hover:text-tan-400 transition-colors text-xs uppercase tracking-wider">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cream-100/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-cream-100/25 text-xs">
            &copy; {new Date().getFullYear()} Spencer Hanson. All rights reserved.
          </p>
          <p className="text-cream-100/25 text-xs">
            (914) 454-1515 · me@protectedwithspencer.com
          </p>
        </div>
      </div>
    </footer>
  );
}
