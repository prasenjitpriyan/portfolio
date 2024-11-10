import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import AuthProvider from '@/components/AuthProvider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata = {
  title:
    'Dynamic Solutions: JavaScript & TypeScript Development with Prasenjit Das',
  description:
    'Welcome to my portfolio! I’m a dedicated JavaScript and TypeScript developer passionate about building robust and scalable web applications. Here, you will find a collection of my projects that highlight my expertise in crafting seamless user experiences, optimizing performance, and implementing best practices. Dive into my work to see how I transform ideas into dynamic solutions, leveraging the power of modern frameworks and libraries.',
  openGraph: {
    title: 'Prasenjit Das - JavaScript & TypeScript Developer',
    description:
      'Welcome to my portfolio! I’m a dedicated JavaScript and TypeScript developer passionate about building robust and scalable web applications. Here, you will find a collection of my projects that highlight my expertise in crafting seamless user experiences, optimizing performance, and implementing best practices. Dive into my work to see how I transform ideas into dynamic solutions, leveraging the power of modern frameworks and libraries.',
    url: 'https://portfolio-theta-inky-13.vercel.app',
    images: [
      {
        url: '/og-image.png', // Ensure image is in the public folder
        width: 800,
        height: 600,
        alt: "Prasenjit Das's Portfolio"
      }
    ],
    type: 'website'
  }
}

export default function RootLayout({ children }) {
  const openGraphImages = metadata.openGraph.images?.[0] // Safely access the image data

  return (
    <AuthProvider>
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

          {/* Only render these meta tags if openGraphImages exists */}
          {openGraphImages && (
            <>
              <meta property="og:image" content={openGraphImages.url} />
              <meta property="og:image:width" content={openGraphImages.width} />
              <meta
                property="og:image:height"
                content={openGraphImages.height}
              />
              <meta property="og:image:alt" content={openGraphImages.alt} />
            </>
          )}

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.openGraph.title} />
          <meta
            name="twitter:description"
            content={metadata.openGraph.description}
          />
          {openGraphImages && (
            <meta name="twitter:image" content={openGraphImages.url} />
          )}

          {/* Default Title and Description */}
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
