'use client'

import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
  FaBootstrap
} from 'react-icons/fa'
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'
import { motion } from 'framer-motion' // Import motion from framer-motion

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-red-500', percentage: 98 },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500', percentage: 98 },
  {
    name: 'JavaScript',
    icon: <FaJs />,
    color: 'text-yellow-500',
    percentage: 98
  },
  {
    name: 'Node.js',
    icon: <FaNode />,
    color: 'text-green-500',
    percentage: 98
  },
  { name: 'React', icon: <FaReact />, color: 'text-blue-300', percentage: 98 },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    color: 'text-green-600',
    percentage: 90
  },
  {
    name: 'Express',
    icon: <SiExpress />,
    color: 'text-gray-500',
    percentage: 85
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    color: 'text-teal-400',
    percentage: 95
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'text-blue-500',
    percentage: 90
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap />,
    color: 'text-purple-600',
    percentage: 95
  }
]

const SkillSection = () => {
  return (
    <section className="text-center py-16 bg-transparent text-my-color-4">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-8xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Adjust `amount` as needed (percentage of the element in view)
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="absolute w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-gray-700"
                  fill="none"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray="251.2" // Circumference of the circle (2 * π * r)
                  initial={{ strokeDashoffset: 251.2 }} // Start with full circumference (no progress)
                  whileInView={{
                    strokeDashoffset: (251.2 * (100 - skill.percentage)) / 100
                  }} // Animate to the desired offset when in view
                  transition={{ duration: 1.5, ease: 'easeInOut' }} // Smooth transition
                  className={`${skill.color}`}
                  fill="none"
                />
              </svg>
              <span className="absolute text-2xl font-semibold">
                {skill.percentage}%
              </span>
            </div>

            <div className={`text-5xl mt-4 ${skill.color}`}>{skill.icon}</div>
            <h3 className="mt-2 text-xl font-bold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SkillSection
