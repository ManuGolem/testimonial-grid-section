import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
    plugins: [tailwindcss()],
    build: {
        outDir: "docs",
    },
    base: mode === "production" ? "testimonial-grid-section" : "/",
}));
