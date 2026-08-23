// ============================================================
// API service — talks to the real FastAPI backend.
// No mock data, no hardcoded scores: every prediction shown in
// the UI comes from this function's response.
// ============================================================

// Override with a .env file (VITE_API_URL=...) if you ever move
// the backend off localhost. Defaults to exactly what the API
// requires.
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

/**
 * Sends the assessment answers to POST /predict and returns the
 * parsed JSON body, e.g. { predicted_mental_health_score: 6.57 }.
 *
 * Throws an Error with a user-friendly message on any failure
 * (network unreachable, 422 validation, 500 prediction error).
 */
export async function predictMentalHealth(payload) {
  let response;

  try {
    response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (networkError) {
    throw new Error(
      `Unable to connect to the prediction server. Please make sure the FastAPI backend is running at ${API_URL}.`
    );
  }

  if (response.ok) {
    return response.json();
  }

  // Try to read FastAPI's error body for a more specific message.
  let detailMessage = null;
  try {
    const body = await response.json();
    if (Array.isArray(body?.detail)) {
      // Pydantic validation errors: a list of {loc, msg, type}
      detailMessage = "Please check the highlighted fields and try again.";
    } else if (typeof body?.detail === "string") {
      detailMessage = body.detail;
    }
  } catch {
    // Response wasn't JSON — fall through to status-based messages.
  }

  if (response.status === 422) {
    throw new Error(detailMessage || "Please check the highlighted fields and try again.");
  }

  if (response.status === 500) {
    throw new Error(
      detailMessage || "The prediction model couldn't process your data. Please try again."
    );
  }

  throw new Error(detailMessage || `Prediction failed (HTTP ${response.status}). Please try again.`);
}

export { API_URL };
