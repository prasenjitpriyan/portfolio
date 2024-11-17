'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const achievements = [
  {
    title: 'Certified JavaScript Developer',
    description: 'Completed advanced JavaScript certification.',
    certificateLink: '/path/to/javascript-certificate.pdf'
  },
  {
    title: 'Responsive Web Design',
    description: 'Certification in responsive web development by freeCodeCamp.',
    certificateLink: '/path/to/responsive-design-certificate.pdf'
  },
  {
    title: 'MongoDB Basics',
    description: 'MongoDB University certification for basics.',
    certificateLink: '/path/to/mongodb-certificate.pdf'
  }
]

const CertificatesShowcasePage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedAchievement, setSelectedAchievement] = useState(null)

  const openModal = (achievement) => {
    setSelectedAchievement(achievement)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedAchievement(null)
  }

  return (
    <div className="max-w-7xl mx-auto p-4 bg-my-color-2">
      <h2 className="text-2xl font-bold text-my-color-4 mb-6">
        Certificates Showcase
      </h2>
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {achievements.map((achievement, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-between p-4 border border-my-color-3 rounded-lg hover:shadow-lg transition"
          >
            <div className="sm:w-2/3">
              <h3 className="text-xl font-semibold text-my-color-3">
                {achievement.title}
              </h3>
              <p className="text-sm text-my-color-4">
                {achievement.description}
              </p>
            </div>
            <button
              onClick={() => openModal(achievement)}
              className="mt-4 sm:mt-0 bg-my-color-3 text-my-color-2 px-4 py-2 rounded-md text-sm hover:bg-my-color-1 hover:text-my-color-4 transition"
            >
              View Certificate
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <AnimatePresence>
        {isOpen && selectedAchievement && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-lg w-full sm:max-w-xl lg:max-w-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">
                {selectedAchievement.title}
              </h3>
              <p className="text-sm mb-4">{selectedAchievement.description}</p>
              <a
                href={selectedAchievement.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-my-color-3 text-my-color-2 px-4 py-2 rounded-md text-sm hover:bg-my-color-1 hover:text-my-color-4 transition"
              >
                Open Certificate
              </a>
              <button
                onClick={closeModal}
                className="mt-4 w-full bg-my-color-4 text-my-color-2 px-4 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-my-color-4 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CertificatesShowcasePage
