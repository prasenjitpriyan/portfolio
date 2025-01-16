'use client'

import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { motion } from 'framer-motion'

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-20 right-0 rotate-[90deg]">
      <div className="hidden sm:block">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gray-500 tracking-widest pr-4">
            SCROLL DOWN
          </span>
          <motion.div
            className="text-gray-500 text-3xl"
            animate={{
              x: [0, -10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut'
            }}
          >
            <GoArrowRight />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ScrollIndicator
