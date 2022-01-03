module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tablet: '618px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        crimson: ['Crimson Pro', 'serif'],
        lusitana: ['Lusitana', 'serif'],
      },
      fontSize: {
        sm: ['12.5px', '20px'],
        md: ['15px', '24px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['21.6px', '28px'],
        '2xl': ['25.92px', '32px'],
        '3xl': ['31.10px', '36px'],
      },
      colors: {
        white: '#fff',
        gray: {
          lightest: '#F3F0F1',
          border: '#e5e0e1',
          lighter: "#8C7B83",
          light: '#91888C',
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
