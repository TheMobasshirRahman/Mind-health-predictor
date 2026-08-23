import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const MESSAGES = [
  "Reviewing your digital habits…",
  "Weighing academic and lifestyle patterns…",
  "Running the prediction model…",
  "Preparing your result…",
];

export default function LoadingState() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1 < MESSAGES.length ? i + 1 : i));
    }, 1100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-5 py-24">
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-haze text-brand-600">
          <Loader2 size={28} className="animate-spin" strokeWidth={2} />
        </div>
        <h2 className="mt-6 font-display text-xl font-semibold text-ink">Analyzing your responses…</h2>
        <p className="mt-2 min-h-[1.5em] text-[15px] text-ink-600">{MESSAGES[msgIndex]}</p>

        <div className="mt-7 h-1.5 w-full overflow-hidden rounded-full bg-mist">
          <div className="h-full w-1/3 animate-loading-sweep rounded-full bg-gradient-to-r from-brand-500 to-teal-500" />
        </div>
      </div>
    </section>
  );
}
