'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Header from './Header'

const WorksSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <section
      id="hero-section"
      className="relative h-screen overflow-hidden bg-ghost-white text-jet-black flex flex-col"
    >
      {/* Header */}
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="fixed left-8 top-[50%] rotate-[270deg] w-8 h-8">
        <p className="text-xs">WORKS</p>
      </div>
      <div className="flex justify-center items-center border-2 h-screen relative">
        <Image
          src={'/work.png'}
          alt="work"
          width={500}
          height={500}
          className="px-12 md:px-0 opacity-80 md:h-[500px] md:w-[500px]"
          priority
        />
        <h1 className="absolute text-6xl md:text-7xl text-black font-bold">
          MY WORKS
        </h1>
        {/* Animated Arrow */}
        <div className="absolute bottom-8 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-jet-black animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default WorksSection
