import type { Config } from "tailwindcss";

// Design tokens confirmed against the current static site's :root block
// (index.html) during the 2026-08-19 rebuild-scoping audit. Kept as the
// same 9 colors + 3 font families, ported to Tailwind's theme.extend
// rather than converted to a different palette.
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        "near-black": "#111111",
        dark: "#1A1A18",
        gold: {
          DEFAULT: "#E2B960",
          light: "#F0D080",
        },
        cream: "#F5F0E8",
        body: "#B8AFA3",
        dim: "#9A8E82",
        faint: "#6B6058",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
