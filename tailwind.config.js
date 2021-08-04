const { url } = require('inspector')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      'theme-orange': '#FB9039',
      'theme-dark': '#1F3044',
      'theme-dark2': '#2c3e52db',
      'theme-light': '#dcd5c1',
      'white': '#FFFFFF',
      'indigo': '#5c6ac4',
      'indigo-dark': '#202e78',
    },
    extend: {
      backgroundImage: theme => ({
        'header': "url('assets/images/gamer-bg-opaque2.png')",
        'platform-windows': "url('assets/images/platform-windows.svg')",
        'platform-browser': "url('assets/images/platform-browser.svg')",


      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
