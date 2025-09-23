import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { playwrite, roboto } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-one-blond-61.vercel.app'),
  title: 'Prasenjit Das || Portfolio',
  description:
    'From delivering postal services to delivering code – Crafting solutions with JavaScript & TypeScript.',
  openGraph: {
    title: 'Prasenjit Das || Portfolio',
    description:
      'Crafting modern web solutions with React, TypeScript, and Tailwind CSS.',
    url: 'https://portfolio-one-blond-61.vercel.app',
    images: [
      {
        url: '/my.jpg',
        width: 1200,
        height: 630,
        alt: 'Prasenjit Das Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle',
    title: 'Prasenjit Das || Portfolio',
    description:
      'Crafting modern web solutions with React, TypeScript, and Tailwind CSS.',
    images: ['/my.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${playwrite.variable}`}>
      <body className="antialiased scrollbar">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
