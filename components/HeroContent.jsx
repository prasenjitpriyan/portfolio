'use client'

import React from 'react'
import MotionWrapper from '@/components/MotionWrapper'
import useTypingEffect from './useTypingEffect'
import Tagline from './Tagline'
import CallToAction from './CallToAction'

const HeroContent = () => {
  const fullText = 'Crafting Solutions with JavaScript & TypeScript'
  const [text] = useTypingEffect(fullText)

  return (
    <MotionWrapper
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="z-50 flex flex-col justify-center items-center"
    >
      {/* Tagline */}
      <Tagline text={text} />

      {/* Call-to-Actions */}
      <div className="flex gap-6 mt-8">
        <CallToAction
          href="/projects"
          bgColor="bg-my-color-3"
          borderColor="border-my-color-3"
          label="View My Projects"
        />
        <CallToAction
          href="/contact"
          bgColor="bg-my-color-2"
          borderColor="border-my-color-2"
          label="Get in Touch"
        />
      </div>
    </MotionWrapper>
  )
}

export default HeroContent
