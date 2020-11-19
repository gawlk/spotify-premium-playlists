const defaultConfig = require('tailwindcss/defaultConfig')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: 'all',
    content: [
      './index.html',
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.svelte',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.vue',
    ],
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  experimental: 'all',
  theme: {
    screens: {
      xs: '420px',
      ...defaultConfig.theme.screens,
    },
    extend: {
      colors: {
        gray: colors.blueGray,
        green: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
      },
      margin: {
        13: '3.25rem',
      },
    },
  },
}
