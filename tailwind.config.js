module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tablet: '618px'
      },
      fontFamily: {
        crimson: ['Crimson Pro', 'serif'],
      },
      fontSize: {
        sm: ['15.83px', '24px'],
        md: ['19px', '28px'],
        lg: ['22.80px', '28px'],
        xl: ['27.36px', '32px'],
      },
      colors: {
        white: '#fff',
        gray: {
          lightest: '#F3F0F1',
          border: '#e5e0e1',
          lighter: "#8C7B83",
          light: '#91888C',
          DEFAULT: '#716A6E',
          dark: "#594F55"
        },
        black: '#302428',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
