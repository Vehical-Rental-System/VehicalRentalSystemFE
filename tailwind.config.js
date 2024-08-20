/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      boxShadow: {
        'customShadow': '5px 5px 11px #bebebe, -5px -5px 11px #ffffff',
        'customShadow1' : '6px 6px 10px #949494, -6px -6px 10px #ffffff',
      },
    },
  },
  plugins: [],
}

