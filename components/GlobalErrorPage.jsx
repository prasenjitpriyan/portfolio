import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'

const GlobalErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100svh-4rem)] bg-my-color-4">
      <div className="text-center">
        <FaExclamationTriangle className="text-my-color-6 text-8xl animate-bounce mb-4" />
        <h1 className="text-5xl font-bold text-my-color-6">
          Something Went Wrong!
        </h1>
        <p className="mt-2 text-lg text-my-color-1">
          We're experiencing technical difficulties.
        </p>
        <p className="mt-2 text-sm text-my-color-2">
          Please try refreshing the page or check back later.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block px-6 py-2 bg-my-color-3 text-my-color-1 rounded hover:bg-red-500 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}

export default GlobalErrorPage
