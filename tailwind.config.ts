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
        navy: {
          DEFAULT: "#183044",
          light: "#22405A",
          dark: "#0F2133",
        },
        gold: {
          DEFAULT: "#F4B213",
          dark: "#9A6E00",
          light: "#F7C64A",
        },
        cream: "#EDF1F5",
        ink: "#3E4C5E",
        line: "#E3E8EE",
      },
      borderRadius: {
        card: "12px",
        pill: "999px",
      },
      fontFamily: {
        sans: ["var(--font-body)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
