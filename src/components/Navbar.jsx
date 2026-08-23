import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "assessment", label: "Assessment" },
  { id: "how-it-works", label: "How It Works" },
  { id: "about", label: "About" },
];

export default function Navbar({ onNavigate, onStartAssessment }) {
  const [open, setOpen] = useState(false);

  const handleLink = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-mist/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => handleLink("home")}
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path
                d="M2 13 L7 13 L9.5 7 L13 18 L15.5 10 L17 13 L22 13"
                stroke="url(#navGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="navGrad" x1="2" y1="0" x2="22" y2="0">
                  <stop offset="0" stopColor="#818CF8" />
                  <stop offset="1" stopColor="#2DD4BF" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="font-display text-[17px] font-bold tracking-tight text-ink">
            MindScore <span className="text-brand-600">AI</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.filter((l) => l.id !== "assessment").map((link) => (
            <button
              key={link.id}
              onClick={() => handleLink(link.id)}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-white hover:text-ink"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={onStartAssessment}
            className="inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Start Assessment
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-mist/70 bg-paper px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.filter((l) => l.id !== "assessment").map((link) => (
              <button
                key={link.id}
                onClick={() => handleLink(link.id)}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-ink-600 hover:bg-white hover:text-ink"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => {
              setOpen(false);
              onStartAssessment();
            }}
            className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-glow"
          >
            Start Assessment
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </header>
  );
}
