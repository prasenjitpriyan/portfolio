import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100svh-4rem)] bg-my-color-2">
      <div className="flex flex-col items-center">
        <FaSpinner className="animate-spin text-4xl text-my-color-6 mb-4" />
        <h2 className="text-xl text-my-color-4">Loading...</h2>
        <p className="text-my-color-5">
          Please wait while we fetch your content.
        </p>
      </div>
    </div>
  )
}

export default Loading
