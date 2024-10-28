import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100svh-4rem)] bg-my-color-4">
      <div className="flex flex-col items-center">
        <FaSpinner className="animate-spin text-4xl text-my-color-6 mb-4" />
        <h2 className="text-xl text-my-color-2">Loading...</h2>
        <p className="text-my-color-1">
          Please wait while we fetch your content.
        </p>
      </div>
    </div>
  )
}

export default Loading
