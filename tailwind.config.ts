import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'jet-black': '363636',
        'ghost-white': '#F9F9F9',
        'pearl-white': '#F8F6F0'
      }
    }
  },
  plugins: []
} satisfies Config
