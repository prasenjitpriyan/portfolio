'use client'

// ImageComponent.js
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const MotionImage = motion(Image) // Create a motion-enhanced version of Image

const ImageComponent = ({ src, alt }) => {
  return (
    <MotionImage
      width={500}
      height={500}
      src={src}
      alt={alt}
      className="w-full max-w-md rounded-lg shadow-lg"
      whileHover={{
        scale: 1.1, // Scale the image slightly on hover
        rotate: 2, // Slight rotation for a dynamic effect
        border: '2px solid #ebebeb', // Change border on hover
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' // Add a shadow effect
      }}
      transition={{ duration: 0.3 }} // Smooth transition for the effects
    />
  )
}

export default ImageComponent
