/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🟡 Backgrounds
        background: "#FFFCF6", // Main background (warm off-white)
        surface: "#EEEADF", // Secondary background (cards, sections)
        "surface-alt": "#EFF0E9", // Alternate background (inner sections)
        "surface-soft": "#DEE9E4", // Soft neutral background (headers, dividers)

        // 🟢 Primary brand colors
        primary: {
          DEFAULT: "#225A4B", // Main green
          light: "#577A71", // Lighter green (hover states, light sections)
          soft: "#DEE9E4", // Very light green (supportive UI)
        },

        // 🧡 Accent colors
        accent: {
          DEFAULT: "#D57B21", // Orange (call-to-action, highlights)
          gold: "#F8BD00", // Golden yellow (icons, emphasis)
          dark: "#816404", // Dark gold (headings, icons)
        },

        // ⚫ Text
        text: "#000000", // Main text color
        muted: "#808080", // Muted/secondary text

        // 🔴 Error / Alert
        error: "#BC0101", // Error or alert messages
      },
      fontFamily: {
        nunitoExtralight: ["Nunito-extralight", "sans-serif"],
        nunitoBold: ["Nunito-bold", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        otoma: ["OtomanopeeOne"],
      },
    },
  },
  plugins: [],
};
