'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef(null)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  return (
    <footer ref={footerRef} className="bg-my-color-1 text-my-color-4 py-6">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-2">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center text-sm"
        >
          Crafted with ❤️ by Prasenjit Das
        </motion.p>

        {/* Dynamic Year */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="text-center text-xs"
        >
          © {currentYear} Prasenjit Das. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
