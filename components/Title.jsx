'use client'

// Title.js
import React from 'react'
import { motion } from 'framer-motion'

const Title = ({ text }) => {
  // Split the text into words
  const words = text.split(' ')

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left mb-4">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -20, color: '#61dbfb' }} // Start with color black
          animate={{ opacity: 1, y: 0, color: '#ebebeb' }} // Animate to color #ebebeb
          transition={{ duration: 0.5, delay: index * 0.3 }} // Delay of 0.3 seconds for each word
        >
          {word}{' '}
        </motion.span>
      ))}
    </h1>
  )
}

export default Title
