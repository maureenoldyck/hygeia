module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          vrt: '#38f34b',
          vrtdark: '#38e34b',
          footer: '#DEFFB4'
        },
        yellow: {
          banana: '#F4FFE5'
        }
      },
      rotate: {
        contact: '-4.4deg'
      },
      scale: {
        25: '.25'
      },
      height: {
        ten: '10%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
