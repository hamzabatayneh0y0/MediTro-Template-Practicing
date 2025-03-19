import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base: "/MediTro-Template-Practicing/",
  base: "/",
  plugins: [react()],
});
