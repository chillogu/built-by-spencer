import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt=""
              className="w-6 h-6 rounded-full object-cover ring-1 ring-white/10"
            />
            <div>
              <span className="text-white text-sm font-medium">Spencer Hanson</span>
              <p className="text-white/30 text-xs">Independent Life Insurance Broker</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="text-white/30 hover:text-white/60 transition-colors text-xs">
              About
            </Link>
            <Link href="/carriers" className="text-white/30 hover:text-white/60 transition-colors text-xs">
              Carriers
            </Link>
            <Link href="/contact" className="text-white/30 hover:text-white/60 transition-colors text-xs">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Spencer Hanson. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            (914) 454-1515 · me@protectedwithspencer.com
          </p>
        </div>
      </div>
    </footer>
  );
}
