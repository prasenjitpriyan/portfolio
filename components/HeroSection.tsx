'use client'

import React, { useState } from 'react'
import CircleSvg from './CircleSvg'
import HeroLeftSection from './HeroLeftSection'
import HeroRightSection from './HeroRightSection'
import Header from './Header'
import HeroSocialLinks from './HeroSocialLinks'
import ScrollIndicator from './ScrollIndicator'

const HeroSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <section
      id="hero-section"
      className="relative h-screen bg-ghost-white text-jet-black flex flex-col"
    >
      {/* CircleSvg */}
      <CircleSvg className="z-0" />

      {/* Header */}
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      {/* Hero Section Content */}
      <div className="relative flex flex-1 items-center px-20 py-20 md:flex-row flex-col-reverse z-20">
        <HeroLeftSection />
        <HeroRightSection />
      </div>

      {/* Social Links */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center px-20 pb-4 z-30 space-y-4 md:flex-row md:space-y-0 md:justify-between">
        <HeroSocialLinks />
        <ScrollIndicator />
      </div>
    </section>
  )
}

export default HeroSection
