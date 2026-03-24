import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ebh: {
          teal: "#009999",
          "teal-dark": "#006E6E",
          "teal-light": "#00BFBF",
          "teal-pale": "#E6F7F7",
          orange: "#FF6B35",
          "orange-hover": "#E55A24",
          "orange-pale": "#FFF1EB",
          "neutral-50": "#F8FAFA",
          "neutral-100": "#F0F4F4",
          "neutral-200": "#D1DEDE",
          "neutral-500": "#6B7A7A",
          "neutral-800": "#2D3838",
          "neutral-900": "#1A2424",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      boxShadow: {
        "teal-sm": "0 2px 8px 0 rgba(0,153,153,0.12)",
        "teal-md": "0 4px 20px 0 rgba(0,153,153,0.18)",
        "orange-md": "0 4px 20px 0 rgba(255,107,53,0.22)",
      },
    },
  },
  plugins: [],
};
export default config;
