'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-my-color-2 text-my-color-4 flex items-center justify-center p-4 sm:p-8 lg:p-12">
      <motion.div
        className="max-w-8xl mx-auto bg-white rounded-lg shadow-2xl p-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{
          scale: 1.02,
          boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.3)'
        }}
      >
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Me
        </h1>

        {/* Introduction */}
        <p className="text-lg mb-6 text-justify text-gray-700">
          Hello, I’m Prasenjit Das—a JavaScript and TypeScript developer with a
          unique background bridging non-technical and tech fields. Previously,
          I served as a Postal Assistant in the Department of Posts, Government
          of India, for a decade, focusing on administrative tasks and customer
          service. This role sharpened my organizational skills and attention to
          detail, but my interest in technology kept growing. Driven by
          curiosity, I began learning web development in my free time, immersing
          myself in online courses and coding challenges. Over the past two
          years, this interest evolved into a passion and career, specializing
          in building intuitive and scalable web applications. I now work with
          JavaScript and TypeScript to create user-friendly solutions and am
          eager to keep growing as a developer. My non-technical background
          offers me a unique perspective, and I aim to contribute to impactful
          projects, continuously learning and improving along the way.
        </p>

        {/* Skills Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>Frameworks/Libraries: React, Node.js, Angular, Vue.js</li>
          <li>Tools: Git, Webpack, Babel</li>
          <li>Testing: Jest, Cypress</li>
          <li>Design: Responsive Design, UX/UI Principles</li>
        </ul>

        {/* Skill Icons/Badges */}
        <div className="flex flex-wrap justify-center mb-6 space-x-4">
          {['JS', 'TS', 'React', 'Node'].map((skill, index) => (
            <motion.div
              key={index}
              className="w-16 h-16 bg-my-color-5 rounded-lg flex items-center justify-center text-my-color-2 font-bold mb-4 shadow-md"
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Experience:
        </h2>
        <ul className="list-decimal list-inside text-gray-700">
          <li>
            <strong>
              Postal Assistant at Department of Posts (2014 - 2024):
            </strong>{' '}
            Developed [specific applications or features], enhancing user
            experience and performance.
          </li>
          <li>
            <strong>[Freelance/Personal Projects]:</strong> Worked on various
            projects, showcasing my ability to deliver quality code and
            effective solutions.
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

export default AboutPage
