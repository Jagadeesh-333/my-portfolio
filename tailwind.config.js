/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Generic theme colors
        primary: "#007396",        // Java Blue
        primaryHover: "#005f73",
        secondary: "#6DB33F",      // Spring Green
        secondaryHover: "#4CAF50",
        dark: "#1F2937",
        light: "#F9FAFB",

        // Tech/company-specific brand colors
        java: "#007396",
        spring: "#6DB33F",
        react: "#61DAFB",
        docker: "#2496ED",
        jenkins: "#D24939",
        postman: "#FF6C37",
        mysql: "#4479A1",
        postgres: "#4169E1",
        oracle: "#F80000",
        git: "#F05032",
        bitbucket: "#0052CC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },

  plugins: [],
}
