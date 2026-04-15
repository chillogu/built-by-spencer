import Link from "next/link";

export default function CTA({
  title = "Let's figure this out together.",
  description = "Free quote. No obligation. Takes about 5 minutes.",
  buttonText = "Get a Quote",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
}) {
  return (
    <section className="bg-charcoal-900 border-t border-cream-100/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
        <div className="max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight text-cream-100">{title}</h2>
          <p className="text-cream-100/50 mb-8">{description}</p>
          <Link
            href="/contact"
            className="inline-block bg-tan-500 text-charcoal-950 font-semibold px-6 py-3 hover:bg-tan-400 transition-colors text-sm uppercase tracking-wider"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
