import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

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
      },
      fontFamily: {
        roboto: ['var(--roboto)', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
} satisfies Config
