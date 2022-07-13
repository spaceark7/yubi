/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBrand: '#007BE6',
        secondaryBrand: '#85EF47',
        tertiaryBrand: '#E6550B',
      },
      fontFamily: {
        brand: ['Inter', 'sans-serif'],
      },
      screens: {
        sm: '390px',
        '3xl': '1600px',
        '2K': '1980px',
      },
      backgroundImage: {
        'business-solution': 'url(/customers/business_solution_bg.webp)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
