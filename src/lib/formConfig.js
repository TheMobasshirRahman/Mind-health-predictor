// ============================================================
// Single source of truth for the assessment form.
// Every option and bound here mirrors the FastAPI StudentData
// model exactly, so the frontend can never submit a value the
// backend would reject.
// ============================================================

export const DEFAULT_FORM = {
  Age: 20,
  Gender: "Male",
  Country: "India",
  Academic_Level: "Undergraduate",
  Most_Used_Platform: "Instagram",
  Purpose_Of_Use: "Entertainment",
  Avg_Daily_Usage_Hours: 5.0,
  Daily_Unlocks: 150,
  Study_Hours: 4.0,
  Physical_Activity_Hours: 1.5,
  Sleep_Hours_Per_Night: 7.0,
  Stress_Level: "Medium",
};

export const AGE_OPTIONS = [18, 19, 20, 21, 22, 23, 24];

export const GENDER_OPTIONS = ["Male", "Female"];

export const COUNTRY_OPTIONS = [
  "India",
  "USA",
  "Canada",
  "Australia",
  "UK",
  "Germany",
  "Mexico",
  "Turkey",
  "France",
  "Other",
];

export const ACADEMIC_LEVEL_OPTIONS = ["High School", "Undergraduate", "Graduate", "Postgraduate"];

export const PLATFORM_OPTIONS = [
  "Instagram",
  "YouTube",
  "TikTok",
  "WhatsApp",
  "Facebook",
  "Snapchat",
  "Twitter",
  "LinkedIn",
  "WeChat",
  "LINE",
  "KakaoTalk",
  "VKontakte",
];

export const PURPOSE_OPTIONS = ["Entertainment", "Networking", "Education", "News"];

export const STRESS_OPTIONS = [
  { value: "Low", helper: "Calm most days" },
  { value: "Medium", helper: "Manageable, some pressure" },
  { value: "High", helper: "Frequently under pressure" },
  { value: "Very High", helper: "Overwhelmed most days" },
];

// Slider bounds — { min, max, step, unit, hint }
export const RANGE_RULES = {
  Avg_Daily_Usage_Hours: {
    min: 1,
    max: 8.8,
    step: 0.1,
    unit: "hrs/day",
    message: "Average daily usage must be between 1 and 8.8 hours.",
  },
  Daily_Unlocks: {
    min: 62,
    max: 273,
    step: 1,
    unit: "unlocks/day",
    message: "Daily unlocks must be between 62 and 273.",
  },
  Study_Hours: {
    min: 0.3,
    max: 8.3,
    step: 0.1,
    unit: "hrs/day",
    message: "Study hours must be between 0.3 and 8.3.",
  },
  Physical_Activity_Hours: {
    min: 0,
    max: 4.1,
    step: 0.1,
    unit: "hrs/day",
    message: "Physical activity must be between 0 and 4.1 hours.",
  },
  Sleep_Hours_Per_Night: {
    min: 3.6,
    max: 9.9,
    step: 0.1,
    unit: "hrs/night",
    message: "Sleep must be between 3.6 and 9.9 hours.",
  },
};

export const STEPS = [
  { id: 1, key: "personal", label: "Personal Info", fields: ["Age", "Gender", "Country", "Academic_Level"] },
  {
    id: 2,
    key: "digital",
    label: "Digital Behaviour",
    fields: ["Most_Used_Platform", "Purpose_Of_Use", "Avg_Daily_Usage_Hours", "Daily_Unlocks"],
  },
  {
    id: 3,
    key: "lifestyle",
    label: "Academic & Lifestyle",
    fields: ["Study_Hours", "Physical_Activity_Hours", "Sleep_Hours_Per_Night"],
  },
  { id: 4, key: "stress", label: "Stress", fields: ["Stress_Level"] },
];

/** Validates one field against RANGE_RULES. Returns an error string, or null if valid. */
export function validateField(field, value) {
  const rule = RANGE_RULES[field];
  if (!rule) return null;
  const num = Number(value);
  if (Number.isNaN(num) || num < rule.min || num > rule.max) {
    return rule.message;
  }
  return null;
}

/** Validates every field belonging to a given step. Returns { field: message } for failures. */
export function validateStep(stepId, data) {
  const step = STEPS.find((s) => s.id === stepId);
  const errors = {};
  if (!step) return errors;
  for (const field of step.fields) {
    const message = validateField(field, data[field]);
    if (message) errors[field] = message;
  }
  return errors;
}

/** Builds the exact JSON payload the FastAPI backend expects, with correct number types. */
export function buildPayload(data) {
  return {
    Age: parseInt(data.Age, 10),
    Gender: data.Gender,
    Country: data.Country,
    Academic_Level: data.Academic_Level,
    Most_Used_Platform: data.Most_Used_Platform,
    Purpose_Of_Use: data.Purpose_Of_Use,
    Avg_Daily_Usage_Hours: Math.round(Number(data.Avg_Daily_Usage_Hours) * 10) / 10,
    Daily_Unlocks: parseInt(data.Daily_Unlocks, 10),
    Study_Hours: Math.round(Number(data.Study_Hours) * 10) / 10,
    Physical_Activity_Hours: Math.round(Number(data.Physical_Activity_Hours) * 10) / 10,
    Sleep_Hours_Per_Night: Math.round(Number(data.Sleep_Hours_Per_Night) * 10) / 10,
    Stress_Level: data.Stress_Level,
  };
}
