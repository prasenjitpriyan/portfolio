// components/MotionWrapper.js
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const MotionWrapper = ({ children }) => {
  // Track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Update mouse position
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    // Attach the event listener
    window.addEventListener('mousemove', handleMouseMove)
    // Clean up on unmount
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="relative overflow-hidden" // Ensure the wrapper contains its content
      style={{
        // Dynamic background style based on mouse position
        background: `radial-gradient(
          circle at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(255, 255, 255, 0.15),
          rgba(0, 0, 0, 0.8)
        )`
      }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      {children}
    </motion.div>
  )
}

export default MotionWrapper
