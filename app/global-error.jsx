'use client'

import React from 'react'
import MotionWrapper from '@/components/MotionWrapper'

const GlobalError = () => {
  return (
    <section className="h-[100svh] bg-my-color-1 flex flex-col items-center justify-center text-my-color-4">
      {/* Animated SVG */}
      <MotionWrapper
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-36 w-36 text-my-color-3 mb-6"
        >
          <path d="M12 2a10 10 0 0110 10v0a10 10 0 01-10 10v0A10 10 0 012 12v0A10 10 0 0112 2z" />
          <path d="M9.09 9h.01M14.91 9h.01M8 13c1.5 2 4.5 2 6 0" />
        </svg>
      </MotionWrapper>

      {/* Animated Heading */}
      <MotionWrapper
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-bold mb-4">Global Error</h1>
      </MotionWrapper>

      {/* Animated Description */}
      <MotionWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p className="text-lg text-center max-w-lg">
          An unexpected error occurred that affected the entire application. Our
          team has been notified, and we’re working to fix it as soon as
          possible.
        </p>
      </MotionWrapper>

      {/* Animated Retry Button */}
      <MotionWrapper
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8"
      >
        <button
          onClick={() => window.location.reload()}
          className="bg-my-color-3 text-my-color-1 py-3 px-6 rounded-lg text-xl hover:bg-my-color-2 hover:text-my-color-4 transition duration-300 ease-in-out"
        >
          Retry
        </button>
      </MotionWrapper>
    </section>
  )
}

export default GlobalError
