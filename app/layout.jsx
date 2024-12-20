import localFont from 'next/font/local'
import './globals.css'

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata = {
  title: 'Prasenjit Das - JavaScript & TypeScript Developer Portfolio',
  description:
    'Welcome to my portfolio! Explore my journey from delivering postal services to delivering code with JavaScript and TypeScript. Discover my skills, achievements, and projects that showcase my dedication to building impactful web applications.',
  metadataBase: new URL('https://portfolio-theta-inky-13.vercel.app'),
  openGraph: {
    title: 'Prasenjit Das - JavaScript & TypeScript Developer Portfolio',
    description:
      'Welcome to my portfolio! Explore my journey from delivering postal services to delivering code with JavaScript and TypeScript. Discover my skills, achievements, and projects that showcase my dedication to building impactful web applications.',
    url: 'https://portfolio-theta-inky-13.vercel.app',
    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 600,
        alt: "Prasenjit Das's Portfolio"
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prasenjit Das - JavaScript & TypeScript Developer Portfolio',
    description:
      'Welcome to my portfolio! Explore my journey from delivering postal services to delivering code with JavaScript and TypeScript. Discover my skills, achievements, and projects that showcase my dedication to building impactful web applications.',
    image: '/og-image.png'
  }
}

export default function RootLayout({ children }) {
  const openGraphImages = metadata.openGraph.images?.[0]

  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        {openGraphImages && (
          <>
            <meta property="og:image" content={openGraphImages.url} />
            <meta property="og:image:width" content={openGraphImages.width} />
            <meta property="og:image:height" content={openGraphImages.height} />
            <meta property="og:image:alt" content={openGraphImages.alt} />
          </>
        )}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Default Title and Description */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
