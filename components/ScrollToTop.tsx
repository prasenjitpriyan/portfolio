'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

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
        <span className="flex items-center font-bold text-gray-500">
          {/* Arrow Icon */}
          <span className="flex items-center">
            <FaArrowUp className="rotate-[270deg] text-gray-500" />
            <span className="w-6 h-[2px] bg-gray-500 ml-[-2px]"></span>
          </span>
          {/* Text */}
          <span className="ml-2 text-gray-500 uppercase text-sm transform">
            TOP
          </span>
        </span>
      </button>
    )
  )
}

export default ScrollToTop
