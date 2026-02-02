import { JsonLd } from '@/components/JsonLd';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { playwrite, roboto } from '../fonts';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-one-blond-61.vercel.app'),
  title: {
    default: 'Prasenjit Das || Portfolio',
    template: '%s | Prasenjit Das',
  },
  description:
    'From delivering postal services to delivering code – Crafting solutions with JavaScript & TypeScript. Expert in React, Next.js, and modern web development.',
  keywords: [
    'Prasenjit Das',
    'Portfolio',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Frontend Engineer',
  ],
  authors: [
    { name: 'Prasenjit Das', url: 'https://portfolio-one-blond-61.vercel.app' },
  ],
  creator: 'Prasenjit Das',
  publisher: 'Prasenjit Das',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Prasenjit Das || Portfolio',
    description:
      'Crafting modern web solutions with React, TypeScript, and Tailwind CSS.',
    url: 'https://portfolio-one-blond-61.vercel.app',
    siteName: 'Prasenjit Das Portfolio',
    images: [
      {
        url: '/my.jpg',
        width: 1200,
        height: 630,
        alt: 'Prasenjit Das Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle', // Replace if you have a handle
    creator: '@yourTwitterHandle', // Replace if you have a handle
    title: 'Prasenjit Das || Portfolio',
    description:
      'Crafting modern web solutions with React, TypeScript, and Tailwind CSS.',
    images: ['/my.jpg'],
  },
  alternates: {
    canonical: 'https://portfolio-one-blond-61.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${playwrite.variable}`}>
      <body className="antialiased scrollbar" suppressHydrationWarning>
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
