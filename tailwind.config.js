/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050B16",
          900: "#0A1428",
          800: "#0F1E3D",
          700: "#16294F",
        },
        accent: {
          DEFAULT: "#1E5BFF",
          light: "#4F86FF",
          dark: "#0E3FCC",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(30, 91, 255, 0.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(30, 91, 255, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(30, 91, 255, 0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        pulseRing: "pulseRing 2.5s infinite",
      },
    },
  },
  plugins: [],
};
