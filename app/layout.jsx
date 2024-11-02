import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import Loader from '@/components/Loader'

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
    'Welcome to my portfolio! I’m a dedicated JavaScript and TypeScript developer passionate about building robust and scalable web applications. Here, you will find a collection of my projects that highlight my expertise in crafting seamless user experiences, optimizing performance, and implementing best practices. Dive into my work to see how I transform ideas into dynamic solutions, leveraging the power of modern frameworks and libraries.'
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>{children}</ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  )
}
