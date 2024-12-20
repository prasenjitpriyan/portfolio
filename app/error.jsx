'use client'

import React from 'react'
import MotionWrapper from '@/components/MotionWrapper'

const Error = () => {
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
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-32 w-32 text-my-color-3 mb-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v4m0 4h.01M21.25 10.75C21.25 6.5 17.75 3 13.5 3S5.75 6.5 5.75 10.75c0 4.25 7.25 9.25 7.25 9.25s7.25-5 7.25-9.25z"
          />
        </svg>
      </MotionWrapper>

      {/* Animated Heading */}
      <MotionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-3xl font-semibold mb-4">Something Went Wrong</h1>
      </MotionWrapper>

      {/* Animated Paragraph */}
      <MotionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p className="text-lg text-center max-w-md">
          We encountered an unexpected error. Please try again later or contact
          support if the issue persists.
        </p>
      </MotionWrapper>
    </section>
  )
}

export default Error
