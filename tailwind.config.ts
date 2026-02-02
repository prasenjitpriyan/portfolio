import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jet-black': '#363636',
        'ghost-white': '#F9F9F9',
      },
      fontFamily: {
        roboto: ['var(--roboto)', ...defaultTheme.fontFamily.sans],
        playwrite: ['var(--font-playwrite)', 'system-ui', 'Arial'],
      },
      animation: {
        'bounce-in-place': 'bounceInPlace 1s ease-in-out infinite',
        'marquee-ltr': 'marqueeLTR 10s linear infinite',
        'marquee-rtl': 'marqueeRTL 10s linear infinite',
      },
      keyframes: {
        bounceInPlace: {
          '0%': {
            transform: 'translate(-50%, -50%) translateY(0)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) translateY(-15px)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) translateY(0)',
          },
        },
        marqueeLTR: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marqueeRTL: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
