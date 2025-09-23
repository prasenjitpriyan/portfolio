import { Playwrite_US_Modern, Roboto } from 'next/font/google';

export const playwrite = Playwrite_US_Modern({
  display: 'swap',
  variable: '--font-playwrite',
  fallback: ['system-ui', 'Arial'],
});

export const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'],
});
