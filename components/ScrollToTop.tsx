'use client'

import { useEffect, useState } from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section')
      const offset = heroSection
        ? heroSection.getBoundingClientRect().bottom
        : 0
      setIsVisible(offset < 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to HeroSection
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero-section')
    heroSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    isVisible && (
      <button
        onClick={scrollToHero}
        className="fixed bottom-16 right-8 rotate-[90deg]"
      >
        <span className="flex items-center text-gray-500">
          {/* Arrow Icon */}
          <span className="flex items-center">
            <IoIosArrowRoundDown className="rotate-[90deg] text-gray-500 text-3xl" />
          </span>
          {/* Text */}
          <span className="text-gray-500 tracking-widest">TOP</span>
        </span>
      </button>
    )
  )
}

export default ScrollToTop
