'use client'

import Link from 'next/link'
import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const Error = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100svh-4rem)] bg-my-color-2">
      <div className="text-center">
        <FaExclamationTriangle className="text-my-color-6 text-6xl animate-bounce mb-4" />
        <h1 className="text-4xl font-bold text-my-color-6">Oops!</h1>
        <p className="mt-2 text-lg text-my-color-4">Something went wrong.</p>
        <p className="mt-2 text-sm text-my-color-5">
          Please try refreshing the page or come back later.
        </p>
        <Link
          href={'/'}
          className="mt-4 inline-block px-4 py-2 bg-my-color-3 text-my-color-2 rounded hover:bg-red-500 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}

export default Error
