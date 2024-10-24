import localFont from 'next/font/local'
import './globals.css'

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
  title: 'Creative Visions: A Portfolio by Prasenjit Das',
  description:
    'Welcome to my portfolio! I’m Prasenjit Das, a passionate web developer dedicated to transforming ideas into captivating visuals. Explore my diverse range of projects that showcase my skills in JavaScript & TypeScript. With a keen eye for detail and a commitment to excellence, I strive to bring unique concepts to life. Let’s collaborate and turn your vision into reality!'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
