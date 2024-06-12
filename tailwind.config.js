/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'champions': ['champions-font', 'system-ui']
    },
    extend: {},
  },
  plugins: [],
}