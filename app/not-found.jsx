import Link from 'next/link'
import React from 'react'
import MotionWrapper from '@/components/MotionWrapper'

const NotFound = () => {
  return (
    <section className="bg-my-color-1 text-my-color-4 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-6">
        {/* Animated SVG for 404 */}
        <MotionWrapper
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-8"
            viewBox="0 0 100 100"
            width="150"
            height="150"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="none"
              fill="url(#gradient)"
            />
            <path
              d="M30,50 L45,35 L50,40 L35,55 L30,50 M50,50 L65,35 L70,40 L55,55 L50,50 M45,50 L50,45 L55,50 L50,55 Z"
              stroke="none"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-my-color-4"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: '#00ADB5', stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: '#393E46', stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </svg>
        </MotionWrapper>

        {/* Animated Heading and Paragraph */}
        <MotionWrapper
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-semibold mb-4">Oops! Page Not Found</h1>
        </MotionWrapper>

        <MotionWrapper
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-lg mb-8">
            We couldn’t find the page you were looking for. It might have been
            moved or deleted.
          </p>
        </MotionWrapper>

        {/* Animated Link Button */}
        <MotionWrapper
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="/"
            className="bg-my-color-3 text-my-color-1 py-3 px-8 rounded-lg text-xl hover:bg-my-color-2 hover:text-my-color-4 transition duration-300 ease-in-out"
          >
            Go Back to Homepage
          </Link>
        </MotionWrapper>
      </div>
    </section>
  )
}

export default NotFound
