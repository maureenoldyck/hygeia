module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          vrt: '#38f34b',
          vrtdark: '#38e34b'
        },
      },
      rotate: {
        contact: '-4.4deg'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
