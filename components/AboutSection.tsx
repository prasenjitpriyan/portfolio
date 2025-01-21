'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Image from 'next/image'
import ScrollIndicator from './ScrollIndicator'

const AboutSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const svgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key="about-section"
        id="hero-section"
        className="relative h-screen overflow-hidden bg-ghost-white text-jet-black flex flex-col"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } }
        }}
      >
        <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className="fixed left-8 top-[50%] rotate-[270deg] w-8 h-8">
          <p className="text-xs">ABOUT</p>
        </div>
        <motion.div
          className="flex flex-1 px-6 py-10 flex-col-reverse md:flex-row md:px-20 md:py-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="w-full h-full flex justify-center items-center"
            variants={textVariants}
          >
            <p className="text-xl sm:text-3xl md:text-5xl font-thin p-4 text-center md:text-left">
              From Seamless Communication to Impactful Code – Crafting
              Meaningful Digital Experiences with Precision and Passion.
            </p>
          </motion.div>
          <div className="relative flex justify-center items-center space-x-10 md:space-x-20">
            {/* SVG in the background */}
            <motion.div
              className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] z-0"
              variants={svgVariants}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-full h-full text-jet-black"
                fill="none"
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
              </svg>
            </motion.div>
            {/* Image */}
            <motion.div
              className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] p-4 z-10"
              variants={imageVariants}
            >
              <Image
                src="/4.png"
                alt="about"
                width={500}
                height={500}
                priority
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
        <ScrollIndicator />
      </motion.section>
    </AnimatePresence>
  )
}

export default AboutSection
