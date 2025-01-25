'use client'

import React from 'react'
import { Projects } from '@/types/projects'
import Button from './Button'
import { GoArrowRight } from 'react-icons/go'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface SlugNextPrevProjectsProps {
  project: Projects
  projects: Projects[]
}

const SlugNextPrevProjects: React.FC<SlugNextPrevProjectsProps> = ({
  project,
  projects
}) => {
  const currentIndex = projects.findIndex((proj) => proj.id === project.id)

  // Calculate next and previous projects
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length]

  return (
    <div className="h-screen px-10 md:px-20 py-20">
      {/* Next Project Section */}
      <motion.div
        className="h-1/2 w-full flex justify-between items-center group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="flex flex-col gap-20">
          <div className="pb-4">
            <p className="text-xs">NEXT PROJECT</p>
            <h1
              className="text-5xl font-semibold text-white group-hover:text-black transition-all duration-500 ease-in-out"
              style={{
                textShadow:
                  '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
              }}
            >
              {nextProject.title}
            </h1>
          </div>
          <Button
            text="VIEW PROJECT"
            href={`/works/${nextProject.slug}`}
            icon={<GoArrowRight className="text-2xl" />}
            className="text-jet-black group-hover:text-black transition-all duration-500 ease-in-out"
            circleColor="bg-gray-300"
            hoverWidth="170px"
          />
        </div>
        <div className="border-2 h-[250px] w-[200px] md:w-[400px] overflow-hidden relative">
          <motion.div className="p-1 h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out">
            <Image
              src={nextProject.slug_hero_image}
              alt={nextProject.title}
              width={1920}
              height={1080}
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:grayscale-0 grayscale"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Previous Project Section */}
      <motion.div
        className="h-1/2 w-full flex justify-between items-center group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="flex flex-col gap-20">
          <div className="pb-4">
            <p className="text-xs">PREVIOUS PROJECT</p>
            <h1
              className="text-5xl font-semibold text-white group-hover:text-black transition-all duration-500 ease-in-out"
              style={{
                textShadow:
                  '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
              }}
            >
              {prevProject.title}
            </h1>
          </div>
          <Button
            text="VIEW PROJECT"
            href={`/works/${prevProject.slug}`}
            icon={<GoArrowRight className="text-2xl" />}
            className="text-jet-black group-hover:text-black transition-all duration-500 ease-in-out"
            circleColor="bg-gray-300"
            hoverWidth="170px"
          />
        </div>
        <div className="border-2 h-[250px] w-[200px] md:w-[400px] overflow-hidden relative">
          <motion.div className="p-1 h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out">
            <Image
              src={prevProject.slug_hero_image}
              alt={prevProject.title}
              width={1920}
              height={1080}
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:grayscale-0 grayscale"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default SlugNextPrevProjects
