'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion' // Import motion from framer-motion

const Certificate = ({ title, image, description, date }) => {
  return (
    <motion.div
      className="bg-my-color-4 rounded-lg shadow-lg overflow-hidden relative transition-transform"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }} // Scale effect
      transition={{ duration: 0.3 }} // Smooth transition
    >
      <Image
        width={500}
        height={500}
        src={image}
        alt={title}
        className="w-full h-80 object-cover"
      />
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity duration-300 backdrop-blur-sm" />

      {/* Text overlay that appears on hover */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-xl font-semibold text-my-color-2 mb-2">{title}</h2>
        <p className="text-my-color-2 mb-2">{description}</p>
        <span className="text-my-color-2 text-sm">{date}</span>
      </div>
    </motion.div>
  )
}

export default Certificate
