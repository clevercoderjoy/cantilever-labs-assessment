/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        card1: "0px 0px 1px 0px #0000000A",
        card2: "0px 2px 6px 0px #0000000A",
        card3: "0px 16px 24px 0px #0000000F",
      },
    },
  },
  plugins: [],
};
