import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CFB489",
        secondary: "#DCE0E1",
        "gray-dark": "#333",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulse: {
          "0%": { "box-shadow": "0 0 0 0 rgba(207, 180, 137, 0.4)" },
          "70%": { "box-shadow": "0 0 0 10px rgba(207, 180, 137, 0)" },
          "100%": { "box-shadow": "0 0 0 0 rgba(207, 180, 137, 0)" },
        },
      },
      animation: {
        fadeIn_1_5: "fadeIn 1.5s ease",
        pulse: "pulse 2s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
