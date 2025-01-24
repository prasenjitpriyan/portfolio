'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Projects } from '@/types/projects'
import { motion } from 'framer-motion'
import Header from './Header'

interface SlugSectionProps {
  project: Projects
}

const SlugSection: React.FC<SlugSectionProps> = ({ project }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <section className="min-h-screen overflow-hidden relative">
      <div className="h-screen flex justify-center items-center relative">
        <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className="absolute">
          <motion.h1
            className="text-7xl font-bold text-gray-200"
            animate={{
              textShadow: [
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {project.title}
          </motion.h1>
          <p className="text-xl text-gray-200 text-center font-thin">
            {project.category}
          </p>
        </div>
        <Image
          width={1920}
          height={1080}
          priority
          src={project.slug_hero_image}
          alt={project.title}
          className="w-full h-full object-cover p-2"
        />

        {/* Animated line */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gray-200"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}

export default SlugSection
