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
        primary: {
          DEFAULT: "#111111",
          light: "#2D2D2D",
        },
        accent: {
          DEFAULT: "#D4F747",
          light: "#E2F97B",
        },
        neutral: {
          50: "#F7F8FA",
          200: "#E8E8ED",
          700: "#4A4A5A",
          900: "#1A1A2E",
        },
        success: "#22C55E",
      },
      fontFamily: {
        heading: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
