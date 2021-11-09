module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        sm: ['12px', '1.25rem'],
        base: ['14px', '1.25rem'],
        lg: ['17px', '1.5rem'],
        xl: ['20px', '1.75rem'],
        '2xl': ['24px', '1.75rem'],
        '3xl': ['29px', '2rem'],

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
