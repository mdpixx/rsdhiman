import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — navy & blue (Financy-inspired)
        navy: {
          50: "#eef2fb",
          100: "#d6e0f5",
          200: "#aec2ec",
          300: "#7e9bde",
          400: "#4f74cf",
          500: "#2a54b8",
          600: "#1d3f9c",
          700: "#152e75",
          800: "#0e1f54",
          900: "#0a173d", // primary deep navy
          950: "#060f29",
        },
        accent: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#bcdcff",
          300: "#8ec6ff",
          400: "#59a6ff",
          500: "#1d6fe0", // bright trust blue
          600: "#0f57bf",
          700: "#0d469a",
          800: "#103d7e",
          900: "#133568",
        },
        cream: "#F6F8FC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(10, 23, 61, 0.15)",
        card: "0 20px 50px -20px rgba(10, 23, 61, 0.25)",
        glow: "0 0 0 1px rgba(29, 111, 224, 0.15), 0 25px 50px -12px rgba(29, 111, 224, 0.25)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "navy-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(29,111,224,0.35), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
