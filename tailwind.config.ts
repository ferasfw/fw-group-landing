import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        "ink-secondary": "#1e2330",
        muted: "#2e2e36",
        "muted-light": "#44444f",
        accent: "#1a4fd4",
        "accent-hover": "#153fb0",
        border: "#c2c0ba",
        "border-soft": "#e8e6e2",
        surface: "#f8f7f5",
      },
      maxWidth: {
        page: "920px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        label: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
