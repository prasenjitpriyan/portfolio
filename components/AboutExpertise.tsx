'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutExpertise: React.FC = () => {
  const sections = [
    {
      title: 'Motion and Interactive Experiences',
      points: [
        'Expertise in creating immersive scroll-based and timeline-driven animations using GSAP.',
        'Building fluid and interactive components with Framer Motion in React.js.',
        'Focused on designing visually engaging transitions to enhance user experience.'
      ]
    },
    {
      title: 'Continuous Learning and Exploration',
      points: [
        'Exploring advanced motion techniques to build captivating web interfaces.',
        'Learning Angular and Vue.js to expand front-end development skills.',
        'Staying updated with the latest JavaScript and React.js advancements.'
      ]
    }
  ]

  return (
    <motion.section
      className="min-h-[50svh] w-full overflow-hidden bg-ghost-white text-jet-black flex flex-wrap px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Grid */}
      <motion.div
        className="w-full h-1/6 md:w-1/3 p-4 md:h-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex gap-12">
          <p className="font-thin">/ 03 -</p>
          <p className="font-thin">EXPERTISE</p>
        </div>
      </motion.div>
      {/* Right Grid */}
      <div className="w-full h-5/6 md:w-2/3 p-4 md:h-full">
        <div className="max-w-4xl">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h2 className="text-xl font-semibold text-my-color-1 mb-4">
                {section.title}
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default AboutExpertise
