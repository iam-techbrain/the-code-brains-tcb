import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        brand: {
          50: "#F4F7FF",
          100: "#EFF4FF",
          200: "#D0DDFD",
          300: "#96B4FF",
          400: "#618DFF",
          500: "#305EFF", // rgb(48, 94, 255)
          600: "#305EFF", // Master Brand Accent
          700: "#1F47E0",
          800: "#1837AF",
          900: "#061229",
          950: "#030A19",
        },
        success: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
      },
      boxShadow: {
        card: "0 8px 24px -12px rgb(6 18 41 / 0.12)",
        lift: "0 22px 50px -18px rgb(48 94 255 / 0.32)",
        soft: "0 12px 40px -16px rgb(48 94 255 / 0.15)",
        nav: "0 8px 30px rgb(6 18 41 / 0.06)",
        glow: "0 0 30px rgb(48 94 255 / 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
