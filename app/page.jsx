'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import MotionWrapper from '@/components/MotionWrapper'
import { ImagesSlider } from '@/components/ui/images-slider'
import firstPhase from '@/assets/images/First.jpeg'
import secondPhase from '@/assets/images/second.jpeg'
import thirdPhase from '@/assets/images/third.jpeg'
import fourthPhase from '@/assets/images/four.jpeg'

const Home = () => {
  const images = [firstPhase, secondPhase, thirdPhase, fourthPhase]
  const [text, setText] = useState('')
  const fullText = 'Crafting Solutions with JavaScript & TypeScript'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index)) // Safely get the character
        index++
      } else {
        clearInterval(timer)
      }
    }, 100) // Adjust speed by changing the interval duration (in milliseconds)
    return () => clearInterval(timer) // Cleanup on unmount
  }, [])

  return (
    <section className="min-h-[calc(100vh-2rem)] bg-my-color-1 m-4 p-4 rounded-md shadow-lg">
      <ImagesSlider
        className="h-[40rem] rounded overflow-hidden"
        images={images}
      >
        <MotionWrapper
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center"
        >
          {/* Tagline */}
          <MotionWrapper className="font-bold text-2xl md:text-6xl text-center text-my-color-4 py-4">
            From Delivering Postal Services to Delivering Code <br />
            <span className="text-lg md:text-3xl text-my-color-3">
              {text}
              <span className="animate-blink">|</span>
            </span>
          </MotionWrapper>

          {/* Call-to-Actions */}
          <div className="flex gap-6 mt-8">
            {/* View My Projects CTA */}
            <MotionWrapper className="relative group">
              <Link
                href="/projects"
                className="px-6 py-3 bg-my-color-3 text-my-color-4 font-semibold rounded-full shadow-md relative z-10"
              >
                View My Projects
              </Link>
              <MotionWrapper
                animate={{
                  scaleX: [1, 0, 1],
                  scaleY: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="absolute inset-0 border-2 border-my-color-3 rounded-full"
              />
            </MotionWrapper>

            {/* Get in Touch CTA */}
            <MotionWrapper className="relative group">
              <Link
                href="/contact"
                className="px-6 py-3 bg-my-color-2 text-my-color-4 font-semibold rounded-full shadow-md relative z-10"
              >
                Get in Touch
              </Link>
              <MotionWrapper
                animate={{
                  scaleX: [1, 0, 1],
                  scaleY: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="absolute inset-0 border-2 border-my-color-2 rounded-full"
              />
            </MotionWrapper>
          </div>
        </MotionWrapper>
      </ImagesSlider>
    </section>
  )
}

export default Home
