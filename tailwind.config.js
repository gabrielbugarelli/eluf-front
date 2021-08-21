// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows:{
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      gridRow: {
        'span-13': 'span 13 / span 13',
      },
      minHeight: {
        'content': '91vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}