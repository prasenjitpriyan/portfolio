import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CircleSvg from './CircleSvg'

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen bg-ghost-white text-jet-black flex flex-col">
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20">
        {/* Logo */}
        <Link href="/">
          <Image
            width={50}
            height={50}
            src="/pd-logo-black-and-white.png"
            alt="Prasenjit Das"
            className="rounded-lg max-w-full cursor-pointer"
          />
        </Link>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="/about" className="hover:text-ghost-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/works" className="hover:text-ghost-white">
                Works
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ghost-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="relative flex flex-1 items-center px-8 py-20 md:flex-row flex-col-reverse">
        {/* Left Section */}
        <div className="flex-1 space-y-6 z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold">
            From Delivering Postal Services to Delivering Code
          </h1>
          <p className="text-lg">
            Hi, I&apos;m <span className="font-bold">Prasenjit Das</span>, a
            passionate Front-end Developer, based in India.
          </p>

          <Link href="/works">
            <button className="mt-4 px-6 py-3 bg-jet-black text-ghost-white font-medium rounded hover:bg-pearl-white">
              See My Works
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center z-20 h-80 md:h-full">
          <Image
            width={500}
            height={500}
            src="/x.svg"
            alt="Prasenjit Das"
            className="rounded-lg max-w-full"
          />
        </div>
      </div>

      {/* Circle SVG */}
      <CircleSvg />

      {/* Social Links and Scroll Down */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center px-8 pb-4 z-30 space-y-4 md:flex-row md:space-y-0 md:justify-between">
        {/* Social Links (Visible only on medium and larger screens) */}
        <div className="hidden md:flex gap-4 justify-center">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-ghost-white"
          >
            GitHub
          </Link>
          <span className="text-jet-black">/</span>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-ghost-white"
          >
            LinkedIn
          </Link>
          <span className="text-jet-black">/</span>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-ghost-white"
          >
            Facebook
          </Link>
        </div>

        {/* Scroll Down */}
        <div className="flex flex-col items-center">
          <p className="text-sm">Scroll Down</p>
          <div className="animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-jet-black"
            >
              <path
                d="M12 16V4M12 16L8 12M12 16L16 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
