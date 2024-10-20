import React from 'react'
import { FlipWords } from './ui/flip-words'

const Hero = () => {
  const words = [
    'active',
    'energetic',
    'lively',
    'vibrant',
    'sprited',
    'animated',
    'vigorous',
    'agile',
    'responsive',
    'interactive'
  ]

  return (
    <div className="relative h-[8rem] flex justify-center items-center">
      <div className="text-4xl mx-auto font-bold text-my-color-5 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Prasenjit Das
      </div>
    </div>
  )
}

export default Hero
