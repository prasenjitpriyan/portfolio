import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Prasenjit Das || Sanity',
  description:
    'From delivering postal services to delivering code – Crafting solutions with JavaScript & TypeScript.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} antialiased scrollbar`}
        suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
