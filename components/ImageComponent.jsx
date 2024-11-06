'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const MotionImage = motion.create(Image)

const ImageComponent = ({ src, alt }) => {
  return (
    <MotionImage
      width={500}
      height={500}
      src={src}
      alt={alt}
      className="w-full max-w-md rounded-lg shadow-lg"
      whileHover={{
        scale: 1.1,
        rotate: 2,
        border: '2px solid #ebebeb',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
      }}
      transition={{ duration: 0.3 }}
    />
  )
}

export default ImageComponent
