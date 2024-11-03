import React from 'react'

const Description = ({ text }) => {
  return (
    <p className="text-lg sm:text-xl md:text-2xl text-center lg:text-justify text-my-color-4 mb-6 max-w-2xl">
      {text}
    </p>
  )
}

export default Description
