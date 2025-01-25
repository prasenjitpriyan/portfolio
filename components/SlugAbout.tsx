'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import { Projects } from '@/types/projects'
import { GoArrowRight } from 'react-icons/go'

interface SlugAboutProps {
  project: Projects
}

const SlugAbout: React.FC<SlugAboutProps> = ({ project }) => {
  return (
    <div className="h-screen px-8 py-16 md:px-20 md:py-20 relative bg-gray-50 font-thin">
      <motion.div
        className="flex flex-col md:flex-row w-full h-full relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Trigger when section comes into view
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Left Section */}
        <motion.div
          className="flex-1 flex flex-col justify-start items-start bg-white px-6 py-8 md:px-12 md:py-12 shadow-2xl rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} // Trigger animation on scroll into view
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger when in view
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            About the Project
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-4 leading-relaxed max-w-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // Trigger when in view
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {project.about}
          </motion.p>
          <motion.p className="text-lg text-gray-600 mb-2">
            <strong>Platform:</strong> {project.platform}
          </motion.p>
          <motion.p className="text-lg text-gray-600 mb-4">
            <strong>Category:</strong> {project.category}
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger when in view
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Tools & Technologies:
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // Trigger when in view
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {project.technologies.join(' / ')}
          </motion.p>

          <motion.div
            className="mt-10 flex gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger when in view
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button
              text="LAUNCH APP"
              href="/contact"
              icon={<GoArrowRight className="text-2xl" />}
              className="text-jet-black"
              circleColor="bg-gray-200"
              hoverWidth="158px"
            />
            <Button
              text="SOURCE CODE"
              href="/contact"
              icon={<GoArrowRight className="text-2xl" />}
              className="text-jet-black"
              circleColor="bg-gray-300"
              hoverWidth="170px"
            />
          </motion.div>
        </motion.div>

        {/* Animated SVG Positioned in the Center */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }} // Trigger when in view
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full text-gray-400 animate-pulse"
          >
            <rect x="3" y="3" width="18" height="18" rx="4" ry="4"></rect>
            <path d="M8 8h8v8H8z"></path>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SlugAbout
