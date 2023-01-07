/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        'iconp100d': "url('assets/models/p100d.svg')",
        'acOff': "url('assets/climate/ac-off.svg')",
        'acOn': "url('assets/climate/ac-on.svg')",
        'heatOff': "url('assets/climate/heat-off.svg')",
        'heatOn': "url('assets/climate/heat-on.svg')",
        'wheels19Button': "url('assets/wheels/19.svg')",
        'wheels21Button': "url('assets/wheels/21.svg')"
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 2s ease-out'
    }
    },
  },
  plugins: [],
}
