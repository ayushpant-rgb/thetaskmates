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
          DEFAULT: "#009999",
          dark: "#006E6E",
          light: "#00BFBF",
          pale: "#E6F7F7",
        },
        accent: {
          DEFAULT: "#FF6B35",
          hover: "#E55A24",
          pale: "#FFF1EB",
        },
        neutral: {
          50: "#F8FAFA",
          100: "#F0F4F4",
          200: "#D1DEDE",
          500: "#6B7A7A",
          700: "#6B7A7A",
          800: "#2D3838",
          900: "#1A2424",
        },
        success: "#22C55E",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "orange-md": "0 4px 20px 0 rgba(255,107,53,0.22)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
