import { useState } from "react";
import { ArrowLeft, ArrowRight, AlertCircle, Sparkles } from "lucide-react";
import Button from "./ui/Button";
import LoadingState from "./LoadingState";
import PersonalInfo from "./steps/PersonalInfo";
import DigitalBehavior from "./steps/DigitalBehavior";
import Lifestyle from "./steps/Lifestyle";
import StressSection from "./steps/StressSection";
import { STEPS, validateStep } from "../lib/formConfig";

const STEP_COMPONENTS = {
  1: PersonalInfo,
  2: DigitalBehavior,
  3: Lifestyle,
  4: StressSection,
};

export default function AssessmentForm({ initialData, onSubmit, apiError, submitting }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const totalSteps = STEPS.length;
  const currentMeta = STEPS.find((s) => s.id === step);
  const StepComponent = STEP_COMPONENTS[step];

  const handleChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const goNext = () => {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    if (step === totalSteps) {
      onSubmit(data);
    } else {
      setStep((s) => s + 1);
    }
  };

  const goBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  if (submitting) {
    return (
      <section id="assessment" className="py-16 sm:py-24">
        <LoadingState />
      </section>
    );
  }

  return (
    <section id="assessment" className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        {/* Progress */}
        <div className="mb-9">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-600">
              Step {step} of {totalSteps} · {currentMeta.label}
            </span>
            <span className="font-mono text-xs text-ink-400">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-mist">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-teal-500 transition-all duration-500 ease-out"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-mist bg-white p-6 shadow-card sm:p-9">
          <StepComponent data={data} onChange={handleChange} errors={errors} />

          {Object.keys(errors).length > 0 && (
            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle size={17} className="mt-0.5 shrink-0" />
              <div>{Object.values(errors)[0]}</div>
            </div>
          )}

          {apiError && step === totalSteps && (
            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle size={17} className="mt-0.5 shrink-0" />
              <div>{apiError}</div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-mist/70 pt-6">
            <Button
              variant="ghost"
              icon={ArrowLeft}
              iconPosition="left"
              onClick={goBack}
              disabled={step === 1 || submitting}
              className={step === 1 ? "invisible" : ""}
            >
              Back
            </Button>

            {step === totalSteps ? (
              <Button onClick={goNext} icon={Sparkles} disabled={submitting}>
                {submitting ? "Analyzing…" : "Predict My Score"}
              </Button>
            ) : (
              <Button onClick={goNext} icon={ArrowRight}>
                Continue
              </Button>
            )}
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {STEPS.map((s) => (
            <span
              key={s.id}
              className={`h-1.5 rounded-full transition-all ${
                s.id === step ? "w-6 bg-brand-600" : s.id < step ? "w-1.5 bg-brand-300" : "w-1.5 bg-mist"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
