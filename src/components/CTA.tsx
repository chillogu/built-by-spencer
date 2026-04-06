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
    <section className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
        <div className="max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">{title}</h2>
          <p className="text-white/40 mb-8">{description}</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-navy-950 font-medium px-6 py-3 rounded-lg hover:bg-white/90 transition-colors text-sm"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
