'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  return (
    <div className="relative flex flex-col">
      {/* Full Page Image */}
      <div className="relative w-full h-60 md:h-96">
        <Image
          priority
          src={project.image}
          alt={`${project.title} Screenshot`}
          fill // Replaces layout="fill"
          className="object-cover rounded-t-lg"
        />
      </div>
      {/* Description Container */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start from below the screen
        whileInView={{ opacity: 1, y: 0 }} // Move to original position
        transition={{ duration: 0.5 }} // Animation duration
        className="bg-my-color-4 p-4 rounded-b-lg"
      >
        <h2 className="text-2xl font-semibold text-my-color-2 mb-2">
          {project.title}
        </h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Technologies Used:
        </h3>
        <ul className="list-disc list-inside mb-4">
          {project.technologies.map((tech, techIndex) => (
            <li key={techIndex} className="text-gray-600">
              {tech}
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Code Example:
        </h3>
        <pre className="bg-gray-200 p-3 rounded mb-4">
          <code>{project.codeExample}</code>
        </pre>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Challenges & Solutions:
        </h3>
        <p className="text-gray-600 mb-4">{project.challenges}</p>
        <p className="text-gray-600 mb-4">{project.solutions}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Lessons Learned:
        </h3>
        <p className="text-gray-600">{project.lessons}</p>
      </motion.div>
    </div>
  )
}

export default ProjectCard
