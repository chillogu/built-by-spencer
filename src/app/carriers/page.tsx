import CTA from "@/components/CTA";

const carriers = [
  { name: "Americo", note: "Life insurance & final expense", url: "https://americo.com/" },
  { name: "Corebridge Financial", note: "Life insurance & retirement", url: "https://corebridgefinancial.com/" },
  { name: "American Amicable", note: "Life & health insurance", url: "https://www.americanamicable.com/" },
  { name: "Aetna", note: "Health & life insurance", url: "https://www.aetna.com/" },
  { name: "Mutual of Omaha", note: "Life insurance & Medicare", url: "https://mutualofomaha.com/" },
];

export default function Carriers() {
  return (
    <main className="pt-16">
      <section className="border-t border-cream-100/10 bg-charcoal-950">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
          <p className="text-tan-500 text-xs uppercase tracking-[0.2em] font-semibold mb-4">Partners</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-cream-100">
            Carriers I work with
          </h1>
          <p className="text-cream-100/60 max-w-lg mb-12 leading-relaxed">
            I partner with financially strong, well-rated carriers to give you
            real options — not just one company's product.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-100/10">
            {carriers.map((carrier) => (
              <a
                key={carrier.name}
                href={carrier.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-950 p-6 flex items-center justify-between group hover:bg-charcoal-900 transition-colors"
              >
                <div>
                  <h3 className="text-cream-100 font-semibold text-sm mb-0.5">{carrier.name}</h3>
                  <p className="text-cream-100/40 text-xs">{carrier.note}</p>
                </div>
                <svg className="w-4 h-4 text-cream-100/20 group-hover:text-tan-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-12 p-6 bg-charcoal-900 border border-cream-100/10">
            <p className="text-cream-100/50 text-sm">
              These are just a few of the carriers I have access to. New partnerships are added regularly —{" "}
              <a href="/contact" className="text-tan-500 hover:text-tan-400 underline underline-offset-2 font-semibold">
                reach out
              </a>{" "}
              and I'll find the right carrier for your specific needs.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
