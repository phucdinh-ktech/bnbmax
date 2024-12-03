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
      backgroundImage: {
        box: "linear-gradient(132deg, #000000e6 30%, #000 91%)",
      },
      boxShadow: {
        "box-shadow": "6px 8px #fff",
      },
    },
  },
  plugins: [],
};
