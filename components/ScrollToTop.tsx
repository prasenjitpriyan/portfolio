'use client'

import { useEffect, useState } from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { motion } from 'framer-motion'

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
          <motion.span
            animate={{
              x: [0, 10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut'
            }}
            className="flex items-center pr-2"
          >
            <IoIosArrowRoundDown className="rotate-[90deg] text-gray-500 text-3xl" />
          </motion.span>
          {/* Text */}
          <span className="text-gray-500 tracking-widest text-xs">TOP</span>
        </span>
      </button>
    )
  )
}

export default ScrollToTop
