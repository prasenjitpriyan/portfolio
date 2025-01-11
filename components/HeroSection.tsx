'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import CircleSvg from './CircleSvg'
import Logo from './Logo'
import HeroSocialLinks from './HeroSocialLinks'
import HeroLeftSection from './HeroLeftSection'
import HeroRightSection from './HeroRightSection'
import MobileMenu from './MobileMenu'
import { IoIosArrowRoundDown } from 'react-icons/io'

const HeroSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <section className="relative h-screen bg-ghost-white text-jet-black flex flex-col">
      {/* CircleSvg */}
      <CircleSvg className="z-0" />

      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-30">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="/about" className="relative group">
                About
                <span className="absolute left-0 top-1/2 w-0 h-[2px] bg-black transform -translate-y-1/2 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link href="/works" className="relative group">
                Works
                <span className="absolute left-0 top-1/2 w-0 h-[2px] bg-black transform -translate-y-1/2 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="relative group">
                Contact
                <span className="absolute left-0 top-1/2 w-0 h-[2px] bg-black transform -translate-y-1/2 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Hero Section Content */}
      <div className="relative flex flex-1 items-center px-20 py-20 md:flex-row flex-col-reverse z-20">
        <HeroLeftSection />
        <HeroRightSection />
      </div>

      {/* Social Links */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center px-20 pb-4 z-30 space-y-4 md:flex-row md:space-y-0 md:justify-between">
        <HeroSocialLinks />

        {/* Scroll Down Indicator */}
        <div className="flex flex-col items-center">
          <p className="text-sm capitalize">Scroll Down</p>
          <div className="animate-bounce">
            <IoIosArrowRoundDown className="text-jet-black" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
