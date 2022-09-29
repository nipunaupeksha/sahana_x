const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','./public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Inter Tight'", 'sans-serif'],
        content: ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      ...colors,
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '960px',
      'xl': '1024px',
      '2xl': '2048px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
