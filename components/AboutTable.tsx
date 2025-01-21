'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutTable: React.FC = () => {
  const creativeDesign = [
    'Figma',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign',
    'Adobe XD',
    'Adobe After Effects'
  ]

  const webDevelopment = {
    languages: [
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'TypeScript',
      'GraphQL',
      'MongoDB'
    ],
    frameworks: [
      'React JS',
      'Node JS / Express JS',
      'React Native',
      'Redux',
      'Firebase',
      'Webpack'
    ],
    tools: ['Git', 'NPM', 'Yarn', 'Gulp', 'Grunt', '-']
  }

  return (
    <motion.div
      className="max-w-4xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <motion.tr
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <th
                className="bg-gray-100 px-4 py-2 text-left text-gray-700"
                rowSpan={2}
              >
                Creative Design
              </th>
              <th
                className="bg-gray-100 px-4 py-2 text-center text-gray-700"
                colSpan={3}
              >
                Web Development
              </th>
            </motion.tr>
            <motion.tr
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <th className="bg-gray-100 px-4 py-2 text-left text-gray-700">
                Languages
              </th>
              <th className="bg-gray-100 px-4 py-2 text-left text-gray-700">
                Frameworks
              </th>
              <th className="bg-gray-100 px-4 py-2 text-left text-gray-700">
                Tools
              </th>
            </motion.tr>
          </thead>
          <tbody>
            {creativeDesign.map((design, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <td className="px-4 py-2">{design}</td>
                <td className="px-4 py-2">
                  {webDevelopment.languages[index] || ''}
                </td>
                <td className="px-4 py-2">
                  {webDevelopment.frameworks[index] || ''}
                </td>
                <td className="px-4 py-2">
                  {webDevelopment.tools[index] || ''}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default AboutTable
