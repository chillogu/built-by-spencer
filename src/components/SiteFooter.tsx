export default function SiteFooter() {
  return (
    <footer className="bg-bg border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-bold text-white text-base tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Built by Spencer
        </span>
        <a
          href="mailto:me@protectedwithspencer.com"
          className="text-muted text-sm hover:text-white transition-colors"
        >
          me@protectedwithspencer.com
        </a>
        <p className="text-dim text-xs">© 2026</p>
      </div>
    </footer>
  );
}
