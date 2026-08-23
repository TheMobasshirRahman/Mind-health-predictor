export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-mist/70 bg-white/60">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                <path
                  d="M2 13 L7 13 L9.5 7 L13 18 L15.5 10 L17 13 L22 13"
                  stroke="url(#footGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="footGrad" x1="2" y1="0" x2="22" y2="0">
                    <stop offset="0" stopColor="#818CF8" />
                    <stop offset="1" stopColor="#2DD4BF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="font-display text-[15px] font-bold text-ink">MindScore AI</span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-600">
            <button onClick={() => onNavigate("home")} className="hover:text-ink">
              Home
            </button>
            <button onClick={() => onNavigate("how-it-works")} className="hover:text-ink">
              How It Works
            </button>
            <button onClick={() => onNavigate("about")} className="hover:text-ink">
              About
            </button>
          </nav>
        </div>

        <div className="mt-8 border-t border-mist/70 pt-6">
          <p className="max-w-2xl text-xs leading-relaxed text-ink-400">
            MindScore AI produces an experimental, model-generated estimate for educational purposes.
            It is not a clinical diagnosis or medical advice, and is not a substitute for professional
            care.
          </p>
          <p className="mt-3 font-mono text-[11px] text-ink-400">
            © {new Date().getFullYear()} MindScore AI. Built as a student ML/analytics portfolio project.
          </p>
        </div>
      </div>
    </footer>
  );
}
