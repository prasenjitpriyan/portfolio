import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
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
        alt: 'Prasenjit Das Portfolio'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle',
    title: 'Prasenjit Das || Portfolio',
    description:
      'Crafting modern web solutions with React, TypeScript, and Tailwind CSS.',
    images: ['/my.jpg']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  )
}
