import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Mind-health-predictor/",
  server: {
    port: 5173,
  },
});
