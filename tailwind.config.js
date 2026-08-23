/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8FAFC",
        ink: {
          DEFAULT: "#0B1220",
          700: "#1E2A3E",
          600: "#475569",
          400: "#94A3B8",
        },
        mist: {
          DEFAULT: "#E2E8F0",
          light: "#EDF1F7",
        },
        haze: "#EEF2FF",
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#372FA3",
          900: "#2C2680",
        },
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
        },
      },
      fontFamily: {
        display: ["Lexend", "Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)",
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px -12px rgba(15, 23, 42, 0.12)",
        "card-hover": "0 1px 2px rgba(15, 23, 42, 0.05), 0 20px 40px -16px rgba(79, 70, 229, 0.22)",
        glow: "0 0 0 1px rgba(79, 70, 229, 0.06), 0 8px 30px -8px rgba(79, 70, 229, 0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw-in": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.92)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        "loading-sweep": {
          "0%": { transform: "translateX(-110%)" },
          "100%": { transform: "translateX(410%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-soft": "pulse-soft 1.4s ease-in-out infinite",
        "loading-sweep": "loading-sweep 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
