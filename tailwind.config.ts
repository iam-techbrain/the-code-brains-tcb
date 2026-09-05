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
          50: "#F8FAFC",
          100: "#EFF6FF",
          200: "#DBEAFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E40AF",
          800: "#1E3A8A",
          900: "#0F172A",
          950: "#020617",
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
        card: "0 8px 24px -12px rgb(15 23 42 / 0.12)",
        lift: "0 22px 50px -18px rgb(37 99 235 / 0.28)",
        soft: "0 12px 40px -16px rgb(15 23 42 / 0.12)",
        nav: "0 8px 30px rgb(15 23 42 / 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
