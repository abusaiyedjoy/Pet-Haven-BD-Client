/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'sofadi',
  ],
  theme: {
    extend: {
      backgroundImage:{
        // Testomonial bg
        darkImage: "url('https://i.ibb.co.com/287ccXh/testimonial-bg-removebg-preview.png')",
        lightImage: "url('https://i.ibb.co.com/bz83qft/testimonial-bg.jpg')"
      },
      colors: {
        primary: "#950F0D",
        secondary: "#af1417",
        third: "#c10e0e"
      },
    },
  },
  plugins: [require("daisyui")],
};
