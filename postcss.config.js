module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  plugins: {
    tailwindcss: {config: './tailwindcss-config.js' },
    autoprefixer: {},
  },
}
