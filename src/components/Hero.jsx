import { ArrowRight, Sparkles, ShieldCheck, Brain } from "lucide-react";
import RhythmLine from "./ui/RhythmLine";
import Button from "./ui/Button";

const CHIPS = [
  { icon: Brain, label: "ML-powered estimate" },
  { icon: ShieldCheck, label: "Nothing stored or shared" },
  { icon: Sparkles, label: "Results in seconds" },
];

export default function Hero({ onStart, onHowItWorks }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-mist bg-white px-3.5 py-1.5 font-mono text-xs font-medium text-ink-600 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            Student wellbeing · ML prediction
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Understand your <span className="text-brand-600">digital wellbeing</span>.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600">
            Get an AI-powered estimate of your mental health score based on your digital habits,
            academic routine, lifestyle and stress level.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button onClick={onStart} icon={ArrowRight} size="lg">
              Start Assessment
            </Button>
            <Button onClick={onHowItWorks} variant="secondary" size="lg">
              How It Works
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {CHIPS.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 text-sm text-ink-600">
                <Icon size={16} strokeWidth={2.25} className="text-teal-600" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: signature visual */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100/60 via-transparent to-teal-100/50 blur-2xl" />
          <div className="rounded-2xl border border-mist/80 bg-white/80 p-6 shadow-card backdrop-blur-sm sm:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                Digital rhythm · 24h
              </span>
              <span className="h-2 w-2 animate-pulse-soft rounded-full bg-teal-500" />
            </div>
            <RhythmLine variant="hero" className="mt-6 h-40 w-full sm:h-48" />
            <p className="mt-5 border-t border-mist/70 pt-4 font-mono text-[11px] text-ink-400">
              Modeled on patterns across 5,000+ student profiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
