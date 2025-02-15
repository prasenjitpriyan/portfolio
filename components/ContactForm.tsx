'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import { GoArrowRight } from 'react-icons/go'

const ContactForm: React.FC = () => {
  const [message, setMessage] = useState('')
  const buttonRef = useRef<HTMLDivElement | null>(null)
  const maxLength = 1000

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: 'easeInOut' } }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 1.2 // Delays button appearance to match form completion
      }
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.4, ease: 'easeInOut' }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6"
    >
      {/* Form Section */}
      <motion.form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-6"
        variants={containerVariants}
      >
        {/* Name */}
        <motion.div className="mb-6" variants={inputVariants}>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full px-4 py-2 bg-ghost-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-all duration-300 ease-in-out"
            placeholder="Your Name"
            required
          />
        </motion.div>

        {/* Email */}
        <motion.div className="mb-6" variants={inputVariants}>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full px-4 py-2 bg-ghost-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-all duration-300 ease-in-out"
            placeholder="Your Email"
            required
          />
        </motion.div>

        {/* Subject */}
        <motion.div className="mb-6" variants={inputVariants}>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block w-full px-4 py-2 bg-ghost-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-all duration-300 ease-in-out"
            placeholder="Subject"
            required
          />
        </motion.div>

        {/* Message */}
        <motion.div className="mb-6 relative" variants={inputVariants}>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full px-4 py-2 bg-ghost-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-all duration-300 ease-in-out"
            placeholder="Enter your message"
            value={message}
            onChange={handleMessageChange}
            maxLength={maxLength}
            required
          ></textarea>
          {/* Character Counter */}
          <div className="absolute bottom-2 right-4 text-sm text-gray-500">
            {`${message.length}/${maxLength}`}
          </div>
        </motion.div>
      </motion.form>

      {/* Submit Button */}
      <motion.div
        ref={buttonRef}
        className="flex justify-end"
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        whileHover="hover"
      >
        <Button
          text="SEND MESSAGE"
          href={'/'}
          icon={<GoArrowRight className="text-2xl" />}
          className="relative inline-flex items-center transition-all duration-300 ease-in-out"
          hoverWidth="180px"
        />
      </motion.div>
    </motion.div>
  )
}

export default ContactForm
