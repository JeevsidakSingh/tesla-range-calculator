/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'carImage': "url('assets/tesla.jpg')",
        'wheels19': "url('assets/wheel-19.png')",
        'wheels21': "url('assets/wheel-21.png')",
      }
    },
  },
  plugins: [],
}
