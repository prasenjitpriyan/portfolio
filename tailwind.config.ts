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
        'jet-black': '#363636',
        'ghost-white': '#F9F9F9'
      },
      fontFamily: {
        roboto: ['var(--roboto)', ...defaultTheme.fontFamily.sans]
      },
      animation: {
        'bounce-in-place': 'bounceInPlace 1s ease-in-out infinite'
      },
      keyframes: {
        bounceInPlace: {
          '0%': {
            transform: 'translate(-50%, -50%) translateY(0)'
          },
          '50%': {
            transform: 'translate(-50%, -50%) translateY(-15px)'
          },
          '100%': {
            transform: 'translate(-50%, -50%) translateY(0)'
          }
        }
      }
    }
  },
  plugins: []
} satisfies Config
