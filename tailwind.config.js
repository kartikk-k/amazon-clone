/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-1": "#121921",
        "dark-2": "#242542",
        "amazon": "#e67a01"
      }
    },
  },
  plugins: [],
}
