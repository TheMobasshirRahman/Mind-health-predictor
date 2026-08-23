import { useEffect, useState, useRef } from "react";
import { RotateCcw, Sparkles, Home, Download } from "lucide-react";
import Button from "./ui/Button";

const SCALE_MAX = 10; // Mental_Health_Score is trained/reported on a 0–10 scale.
const RADIUS = 80;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function ResultCard({ score, formData, onRetake, onNewAssessment, onBackHome }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [filled, setFilled] = useState(false);
  const frameRef = useRef();

  useEffect(() => {
    const start = performance.now();
    const duration = 1300;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setAnimatedScore(score * easeOutCubic(progress));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    const fillTimer = setTimeout(() => setFilled(true), 50);
    frameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(fillTimer);
    };
  }, [score]);

  const fraction = Math.max(0, Math.min(score / SCALE_MAX, 1));
  const dashOffset = filled ? CIRCUMFERENCE * (1 - fraction) : CIRCUMFERENCE;

  const handleDownload = () => {
    const lines = [
      "MindScore AI — Result Summary",
      "================================",
      `Predicted Mental Health Score: ${score.toFixed(2)} / ${SCALE_MAX}`,
      "",
      "Submitted information:",
      `- Age: ${formData.Age}`,
      `- Gender: ${formData.Gender}`,
      `- Country: ${formData.Country}`,
      `- Academic Level: ${formData.Academic_Level}`,
      `- Most Used Platform: ${formData.Most_Used_Platform}`,
      `- Purpose Of Use: ${formData.Purpose_Of_Use}`,
      `- Average Daily Usage: ${formData.Avg_Daily_Usage_Hours} hrs/day`,
      `- Daily Unlocks: ${formData.Daily_Unlocks}`,
      `- Study Hours: ${formData.Study_Hours} hrs/day`,
      `- Physical Activity: ${formData.Physical_Activity_Hours} hrs/day`,
      `- Sleep: ${formData.Sleep_Hours_Per_Night} hrs/night`,
      `- Stress Level: ${formData.Stress_Level}`,
      "",
      "This is a model-generated estimate, not a clinical diagnosis or medical advice.",
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mindscore-ai-result.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-5 sm:px-8">
        <div className="rounded-2xl border border-mist bg-white p-8 text-center shadow-card sm:p-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-haze px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-brand-600">
            <Sparkles size={12} />
            Prediction complete
          </span>

          <h2 className="mt-5 font-display text-2xl font-bold text-ink">Your Predicted Mental Health Score</h2>

          <div className="relative mx-auto mt-8 h-52 w-52">
            <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
              <circle cx="100" cy="100" r={RADIUS} fill="none" stroke="#E2E8F0" strokeWidth="14" />
              <defs>
                <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#14B8A6" />
                </linearGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r={RADIUS}
                fill="none"
                stroke="url(#scoreGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
                style={{ transition: "stroke-dashoffset 1.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-5xl font-bold tabular-nums text-ink">
                {animatedScore.toFixed(2)}
              </span>
              <span className="mt-1 font-mono text-xs text-ink-400">out of {SCALE_MAX}</span>
            </div>
          </div>

          <p className="mx-auto mt-7 max-w-sm text-sm leading-relaxed text-ink-600">
            Based on the information you provided. This is a model-generated estimate — not a
            diagnosis, and not medical advice.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button onClick={onRetake} variant="secondary" icon={RotateCcw} iconPosition="left">
              Retake Assessment
            </Button>
            <Button onClick={onNewAssessment} variant="secondary" icon={Sparkles} iconPosition="left">
              New Assessment
            </Button>
            <Button onClick={onBackHome} variant="ghost" icon={Home} iconPosition="left">
              Back to Home
            </Button>
          </div>

          <button
            onClick={handleDownload}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-400 transition-colors hover:text-brand-600"
          >
            <Download size={15} />
            Download result as text
          </button>
        </div>
      </div>
    </section>
  );
}
