import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Disclaimer from "./components/Disclaimer";
import AssessmentForm from "./components/AssessmentForm";
import ResultCard from "./components/ResultCard";
import Insights from "./components/Insights";
import Footer from "./components/Footer";
import { predictMentalHealth } from "./services/api";
import { DEFAULT_FORM, buildPayload } from "./lib/formConfig";

export default function App() {
  const [view, setView] = useState("landing"); // 'landing' | 'assessment' | 'result'
  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [result, setResult] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [pendingScroll, setPendingScroll] = useState(null);

  // Scroll to top whenever we switch into the assessment or result view.
  useEffect(() => {
    if (view === "assessment" || view === "result") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [view]);

  // After returning to the landing view, scroll to whichever section was requested.
  useEffect(() => {
    if (view === "landing" && pendingScroll) {
      const frame = requestAnimationFrame(() => {
        const el = document.getElementById(pendingScroll);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setPendingScroll(null);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [view, pendingScroll]);

  const goTo = (sectionId) => {
    if (sectionId === "assessment") {
      startAssessment();
      return;
    }
    setPendingScroll(sectionId);
    setView("landing");
  };

  const startAssessment = () => {
    setApiError(null);
    setView("assessment");
  };

  const handleSubmit = async (data) => {
    const payload = buildPayload(data);
    setFormData(payload);
    setApiError(null);
    setSubmitting(true);
    try {
      const response = await predictMentalHealth(payload);
      setResult(response);
      setView("result");
    } catch (err) {
      setApiError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetake = () => {
    setResult(null);
    setView("assessment"); // formData keeps last answers, pre-filling the form
  };

  const handleNewAssessment = () => {
    setResult(null);
    setFormData(DEFAULT_FORM);
    setView("assessment");
  };

  const handleBackHome = () => {
    setView("landing");
  };

  return (
    <div className="min-h-screen bg-paper">
      <Navbar onNavigate={goTo} onStartAssessment={startAssessment} />

      {view === "landing" && (
        <>
          <Hero onStart={startAssessment} onHowItWorks={() => goTo("how-it-works")} />
          <HowItWorks />
          <Disclaimer />
        </>
      )}

      {view === "assessment" && (
        <AssessmentForm
          initialData={formData}
          onSubmit={handleSubmit}
          apiError={apiError}
          submitting={submitting}
        />
      )}

      {view === "result" && result && (
        <>
          <ResultCard
            score={result.predicted_mental_health_score}
            formData={formData}
            onRetake={handleRetake}
            onNewAssessment={handleNewAssessment}
            onBackHome={handleBackHome}
          />
          <Insights data={formData} />
        </>
      )}

      <Footer onNavigate={goTo} />
    </div>
  );
}
