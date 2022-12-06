/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        colors: {
            rowBG: '#E1E1E1',
        },
      },
  },
  plugins: [require("daisyui")],
}