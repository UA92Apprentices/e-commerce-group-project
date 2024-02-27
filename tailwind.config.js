/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/team-photo 1.svg')",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
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
