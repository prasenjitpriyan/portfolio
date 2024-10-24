/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      'turquoise-blue': {
        50: '#eaffff',
        100: '#cbfeff',
        200: '#9efaff',
        300: '#5bf3ff',
        400: '#00e1ff',
        500: '#00c5e5',
        600: '#009dc0',
        700: '#037c9b',
        800: '#0d647d',
        900: '#105269',
        950: '#033649'
      },
      'chartreuse-yellow': {
        50: '#ffffe4',
        100: '#fdffc4',
        200: '#faff90',
        300: '#f1ff50',
        400: '#e1ff00',
        500: '#c5e600',
        600: '#99b800',
        700: '#738b00',
        800: '#5b6d07',
        900: '#4c5c0b',
        950: '#283400'
      }
    }
  },
  plugins: []
}
