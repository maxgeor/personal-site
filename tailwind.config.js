module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'sm': ['13px', '20px'],
        'base': ['15px', '20px'],
        'lg': ['18px', '24px'],
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        white: '#fff',
        gray: {
          lighter: '#f3f0f1',
          light: '#958c8f',
          DEFAULT: '#716A6E',
        },
        black: '#100006',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
