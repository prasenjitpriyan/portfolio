/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'my-color-1': '#222831',
        'my-color-2': '#393E46',
        'my-color-3': '#00ADB5',
        'my-color-4': '#EEEEEE'
      }
    }
  },
  plugins: []
}
