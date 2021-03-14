module.exports = {
  purge: [
    './public/*.html',
    './public/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxSizing: ['hover', 'focus'],
    },
  },
  plugins: [],
}
