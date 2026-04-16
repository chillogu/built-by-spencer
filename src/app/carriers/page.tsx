import CTA from "@/components/CTA";

const carriers = [
  {
    name: "Americo",
    note: "Life insurance & final expense",
    url: "https://americo.com/",
    description:
      "Specializes in life insurance and final expense coverage. A solid option for straightforward, affordable policies.",
  },
  {
    name: "National Life Group",
    note: "Life insurance & financial services",
    url: "https://www.nationallife.com/",
    description:
      "Over 175 years in business. Offers a wide range of life and living benefits products backed by a financially strong company.",
  },
  {
    name: "Mutual of Omaha",
    note: "Life insurance & Medicare supplement",
    url: "https://mutualofomaha.com/",
    description:
      "One of the most recognized names in insurance. Strong options for term life, whole life, and Medicare supplement plans.",
  },
];

export default function Carriers() {
  return (
    <main className="pt-16">
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <div className="max-w-2xl mb-16">
            <p className="text-brand-700 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              Partners
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-ink-900 leading-[1.05]">
              Carriers I currently have access to.
            </h1>
            <p className="text-ink-600 text-lg leading-relaxed">
              I partner with financially strong, well-rated carriers to give you
              real options — not just one company&apos;s product. More carriers
              are being added in the short future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {carriers.map((carrier) => (
              <a
                key={carrier.name}
                href={carrier.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-ink-200 rounded-xl p-7 hover:border-brand-900/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-brand-900 rounded-md flex items-center justify-center text-white font-bold text-lg">
                    {carrier.name.charAt(0)}
                  </div>
                  <svg
                    className="w-4 h-4 text-ink-300 group-hover:text-brand-900 transition-colors mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <h3 className="text-ink-900 font-semibold text-lg mb-1 tracking-tight">
                  {carrier.name}
                </h3>
                <p className="text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
                  {carrier.note}
                </p>
                <p className="text-ink-600 text-sm leading-relaxed">
                  {carrier.description}
                </p>
              </a>
            ))}
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-brand-900 rounded-md flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-ink-900 font-semibold text-sm mb-1">
                More carriers coming soon
              </h4>
              <p className="text-ink-700 text-sm leading-relaxed">
                I&apos;m actively expanding my carrier partnerships.{" "}
                <a
                  href="/contact"
                  className="font-semibold text-brand-900 underline underline-offset-2 hover:text-brand-700"
                >
                  Reach out
                </a>{" "}
                and I&apos;ll find the right option for your needs — even if
                it&apos;s not listed yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
