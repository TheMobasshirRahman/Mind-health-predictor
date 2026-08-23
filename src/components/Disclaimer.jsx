import { Shield, Info } from "lucide-react";

export default function Disclaimer() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-mist bg-white p-7 shadow-soft sm:p-9">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-haze text-brand-600">
              <Info size={19} strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">About this project</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
              MindScore AI is a student-built applied machine learning project. A regression model
              was trained on survey data covering social media habits, academic routine, lifestyle
              and stress across thousands of student profiles, then served through a FastAPI backend
              that this interface calls directly.
            </p>
          </div>

          <div className="rounded-2xl border border-mist bg-white p-7 shadow-soft sm:p-9">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <Shield size={19} strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">Privacy &amp; disclaimer</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
              Your answers are sent directly to the prediction API for this session only — nothing is
              stored, logged, or shared, and there's no account or tracking. The result is a{" "}
              <strong className="text-ink">model-generated estimate</strong>, not a clinical diagnosis
              or medical advice. If you're concerned about your mental health or someone else's,
              please reach out to a licensed professional or a mental health helpline in your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
