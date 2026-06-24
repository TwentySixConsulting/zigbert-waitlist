import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Served from a GitHub Pages project subpath in production, root in dev.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/zigbert-waitlist/" : "/",
  plugins: [react(), tailwindcss()],
}));
