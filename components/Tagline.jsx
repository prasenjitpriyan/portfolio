'use client'

import React from 'react'
import MotionWrapper from '@/components/MotionWrapper'

const Tagline = ({ text }) => (
  <MotionWrapper className="font-bold text-2xl md:text-6xl text-center text-my-color-4 py-4">
    From Delivering Postal Services to Delivering Code <br />
    <span className="text-lg md:text-3xl text-my-color-3">
      {text}
      <span className="animate-blink">|</span>
    </span>
  </MotionWrapper>
)

export default Tagline
