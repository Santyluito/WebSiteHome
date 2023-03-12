/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ['Lobster Two', "cursive"],
        OpenSans: ["Open Sans", "serif"],
      },
    },
  },
  plugins: [],
}
