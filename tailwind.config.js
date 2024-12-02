/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        secondary: "#dc8431",
        primary: "#c5772f",
      },
    },
  },
  plugins: [],
};
