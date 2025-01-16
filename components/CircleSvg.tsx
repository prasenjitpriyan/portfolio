'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CircleSvgProps {
  className?: string
}

const CircleSvg: React.FC<CircleSvgProps> = ({ className }) => {
  return (
    <div
      className={`absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center ${className}`}
    >
      <motion.svg
        width="500"
        height="500"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-white rounded-full"
        initial={{ scale: 0, opacity: 0, rotate: -90 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          duration: 2,
          ease: 'easeInOut'
        }}
      >
        <circle cx="100" cy="100" r="90" fill="none" />
      </motion.svg>
    </div>
  )
}

export default CircleSvg
