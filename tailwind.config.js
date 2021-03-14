const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/*.html',
    './public/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'dot': ['DotGothic16'],
      'sans': ['Roboto', 'ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['Inter', ],
      'custom': ['Inter', 'sans-serif'],
    },

    extend: {
      colors: {
        fus: colors.fuchsia
      },
    },
  },
  variants: {
    extend: {
      boxSizing: ['hover', 'focus'],
    },
  },
  plugins: [],
}