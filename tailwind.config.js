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
        'icon60': "url('assets/models/60.svg')",
        'icon60d': "url('assets/models/60d.svg')",
        'icon75': "url('assets/models/75.svg')",
        'icon75d': "url('assets/models/75d.svg')",
        'icon90d': "url('assets/models/90d.svg')",
        'icon100d': "url('assets/models/100d.svg')",
      }
    },
  },
  plugins: [],
}
