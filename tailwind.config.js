const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'my-color-1': '#F26B5E',
        'my-color-2': '#A64941',
        'my-color-3': '#592723',
        'my-color-4': '#F2F2F2',
        'my-color-5': '#0D0D0D',
        'my-color-6': '#A1A2A6',
        'my-color-7': '#F2D0BD'
      },
      animation: {
        pass: '2s ease-in-out infinite',
        pass1: '2s ease-in-out infinite'
      },
      keyframes: {
        pass: {
          '0%': {
            opacity: '1'
          },

          '50%': {
            opacity: '0'
          },

          '100%': {
            opacity: '1'
          }
        },
        pass1: {
          '0%': {
            opacity: '1'
          },

          '50%': {
            opacity: '0'
          },

          '100%': {
            opacity: '1'
          }
        }
      }
    }
  },
  plugins: [addVariablesForColors]
}
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )
  addBase({
    ':root': newVars
  })
}
