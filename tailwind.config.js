/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        m: "375px",
        t: "768px",
        d: "1280px",
      },
      colors: {
        "travel-orange": "#F28138",
      },
    },
  },
  plugins: [],
};
