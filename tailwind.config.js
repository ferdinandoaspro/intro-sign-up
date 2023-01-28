/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "red": "hsl(0, 100%, 74%)", 
        "green": "hsl(154, 59%, 51%)",
        "Blue": "hsl(248, 32%, 49%)",
        "dark-blue": "hsl(249, 10%, 26%)", 
        "grayish-blue": "hsl(246, 25%, 77%)"
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
