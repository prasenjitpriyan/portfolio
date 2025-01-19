import React from 'react'
import Link from 'next/link'
import { GoArrowRight } from 'react-icons/go'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Round from './Round'
import Circle from './Circle'
import Button from './Button'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section className="h-screen relative bg-black text-white flex flex-col justify-between">
      <Round className="absolute top-0 right-80" />
      {/* Top Section */}
      <div className="flex justify-center items-center pt-28">
        <h1 className="text-5xl font-bold">Let&apos;s work together.</h1>
      </div>

      {/* Middle Section (Centered Vertically) */}
      <div className="flex flex-col justify-center items-center flex-grow gap-4">
        <h3 className="text-lg font-semibold p-4 text-gray-400">
          I&apos;m available for freelance work.
        </h3>
        <Button
          text="SAY HELLO"
          href="/contact"
          icon={<GoArrowRight className="text-2xl" />}
          className="text-white"
          circleColor="bg-gray-500"
          hoverWidth="140px"
        />
      </div>

      <Circle className="absolute overflow-hidden w-48 h-48 left-[-70px] bottom-[-70px]" />
      {/* Bottom Section */}
      <footer className="w-full flex justify-center items-center p-12 gap-8 text-xs">
        <p className=" text-white">© {currentYear} Prasenjit Das</p>
        <p className="text-xl">||</p>
        <div className="flex gap-2">
          <Link href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="" />
          </Link>
          <Link href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="" />
          </Link>
        </div>
      </footer>
    </section>
  )
}

export default Footer
