export default function Footer() {
  return (
    <footer className="relative border-t border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        {/* Meta row */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-16 font-mono text-xs text-ink-dim">
          <div>
            © {new Date().getFullYear()} studio/dev — all rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink transition-colors">
              privacy
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              imprint
            </a>
            <a href="#top" className="hover:text-accent transition-colors">
              ↑ back to top
            </a>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="relative">
          <h2 className="font-display text-[clamp(5rem,22vw,20rem)] leading-[0.85] tracking-tighter select-none">
            studio
            <span className="italic text-accent">/</span>
            dev
          </h2>
        </div>

        {/* Bottom signature */}
        <div className="mt-8 pt-8 border-t border-line flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] text-ink-faint">
          <div>Handcrafted in Brussels — deployed on Vercel.</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
