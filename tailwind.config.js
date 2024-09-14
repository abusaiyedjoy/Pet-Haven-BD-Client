/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'sofadi',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#950F0D",
        secondary: "#af1417",
        third: "#c10e0e"
      },
    },
  },
  plugins: [require("daisyui")],
};
