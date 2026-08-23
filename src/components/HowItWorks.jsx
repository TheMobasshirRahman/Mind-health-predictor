import { ClipboardList, Brain, Gauge, Compass } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Share your habits",
    body: "Answer a short, four-part form covering your academics, social media use, lifestyle and stress.",
  },
  {
    icon: Brain,
    title: "The model analyzes patterns",
    body: "Your answers are sent to our trained machine learning model — the same one running behind the scenes.",
  },
  {
    icon: Gauge,
    title: "Get your predicted score",
    body: "See a model-generated wellbeing estimate, built from patterns across thousands of student profiles.",
  },
  {
    icon: Compass,
    title: "Reflect on the result",
    body: "Review your score alongside what you submitted. Nothing is saved — retake it any time things change.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-mist/70 bg-white/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-600">
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            From habits to insight, in four steps.
          </h2>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, idx) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-brand-300">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-mist" />
              </div>
              <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-haze text-brand-600">
                <step.icon size={20} strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-[17px] font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
