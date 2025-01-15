'use client'

import React, { useState } from 'react'
import Header from './Header'
import Image from 'next/image'

const AboutSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-ghost-white text-jet-black flex flex-col">
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="fixed left-8 top-[50%] rotate-[270deg] w-8 h-8">
        <p className="text-xs">ABOUT</p>
      </div>
      <div className="flex flex-1 px-20 py-20 flex-col-reverse md:flex-row">
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-3xl md:text-5xl font-thin p-4">
            From Seamless Communication to Impactful Code – Crafting Meaningful
            Digital Experiences with Precision and Passion.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] p-4">
            <Image
              src="/4.png"
              alt="about"
              width={500}
              height={500}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
