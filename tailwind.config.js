module.exports = {
  purge: [],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11,minmax(0, 1fr))',
        '12': 'repeat(12,minmax(0, 1fr))',
        '13': 'repeat(13,minmax(0, 1fr))',
        '14': 'repeat(14,minmax(0, 1fr))',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
