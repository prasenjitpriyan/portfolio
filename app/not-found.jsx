import Link from 'next/link'
import React from 'react'
import MotionWrapper from '@/components/MotionWrapper'
import PageNotFoundIcon from '@/components/PageNotFoundIcon'

const NotFound = () => {
  return (
    <section className="bg-my-color-1 text-my-color-4 h-[100svh] flex items-center justify-center">
      <div className="text-center max-w-3xl px-4">
        {/* Animated SVG for 404 */}
        <MotionWrapper
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <PageNotFoundIcon />
        </MotionWrapper>

        {/* Animated Heading and Paragraph */}
        <MotionWrapper
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-semibold">Oops! Page Not Found</h1>
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
