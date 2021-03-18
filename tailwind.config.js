module.exports = {
  purge: [
    '../*.html'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-main' : '#18191A',
        'dark-second' : '#242526',
        'dark-third' : '#3A3B3C',
        'dark-text' : '#B8BBBF'
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
        '160' : '40rem',
        '176' : '44rem',
        '192' : '48rem',
        '208' : '52rem',
        '224' : '56rem',
        '240' : '60rem',
        '256' : '64rem',
        '272' : '68rem',
        '288' : '72rem',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      transform: ['group-hover'],
      scale: ['group-hover']
    },
  },
  plugins: [],
}
