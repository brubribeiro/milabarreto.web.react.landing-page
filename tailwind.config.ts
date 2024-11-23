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
        pulseShadow: {
          "0%": { "box-shadow": "0 0 0 0 rgba(207, 180, 137, 0.4)" },
          "70%": { "box-shadow": "0 0 0 10px rgba(207, 180, 137, 0)" },
          "100%": { "box-shadow": "0 0 0 0 rgba(207, 180, 137, 0)" },
        },
        pulseWhatsApp: {
          "0%": {"boxShadow": "0 0 0 0 rgba(37, 211, 102, 0.5)"},
          "70%": { "boxShadow": "0 0 0 15px rgba(37, 211, 102, 0)"},
          "100%": { "boxShadow": "0 0 0 0 rgba(37, 211, 102, 0)"},
        },
        slideInRight: {
          "0%": { opacity: "0", transform: 'translateX(50px)' },
          "100%": { opacity: "1", transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn_1_5: "fadeIn 1.5s ease",
        pulseShadow: "pulse 2s infinite",
        pulseWhatsapp: "pulseWhatsApp 2s infinite",
        slideInRight: 'slideInRight 0.8s ease forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
