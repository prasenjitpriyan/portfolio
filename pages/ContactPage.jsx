'use client'

import React from 'react'
import MotionWrapper from '@/components/MotionWrapper'
import { motion } from 'framer-motion'

const MotionSVG = motion.svg

const ContactPage = () => {
  return (
    <section className="h-auto bg-my-color-2">
      <MotionWrapper>
        <div className="mx-auto rounded-lg shadow-lg p-8 md:flex max-w-7xl">
          {/* Left Column: Animated SVG */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/2 md:pr-6 flex justify-center items-center">
            <MotionSVG
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              className="w-72 h-72 text-my-color-4"
              initial={{ scale: 0.8, rotate: 0, opacity: 0 }}
              animate={{ scale: 1, rotate: 360, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                duration: 2,
                loop: Infinity
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <rect width="500" height="500" fill="none" />
              <motion.circle
                cx="250"
                cy="250"
                r="240"
                fill="#ebebeb"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.circle
                cx="250"
                cy="160"
                r="70"
                fill="#61dbfb"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <motion.rect
                x="130"
                y="260"
                width="240"
                height="140"
                rx="20"
                fill="#f06529"
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
              <motion.rect
                x="140"
                y="270"
                width="220"
                height="80"
                rx="10"
                fill="#2965f1"
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              />
              <motion.path
                d="M160 290h60v40h-60zm90 0h60v40h-60z"
                fill="#007acc"
                opacity="0.8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 2.5 }}
              />
              <motion.circle
                cx="240"
                cy="290"
                r="10"
                fill="#f0db4f"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 3 }}
              />
              <motion.circle
                cx="290"
                cy="290"
                r="10"
                fill="#f0db4f"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 3.2 }}
              />
            </MotionSVG>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-my-color-4 text-center md:text-left mb-6">
              Contact Me
            </h1>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-my-color-4">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-3 border border-my-color-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-my-color-4">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 border border-my-color-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-my-color-4">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="w-full p-3 border border-my-color-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-my-color-4 text-white font-semibold py-3 rounded-md hover:bg-my-color-5 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </MotionWrapper>
    </section>
  )
}

export default ContactPage
