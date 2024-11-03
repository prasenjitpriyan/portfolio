import React from 'react'

const Title = ({ text }) => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left text-my-color-4 mb-4">
      {text}
    </h1>
  )
}

export default Title
