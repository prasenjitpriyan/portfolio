'use client'

import React from 'react'
import Link from 'next/link'
import MotionWrapper from '@/components/MotionWrapper'

const CallToAction = ({ href, bgColor, borderColor, label }) => (
  <MotionWrapper className="relative group">
    <Link
      href={href}
      className={`px-6 py-3 ${bgColor} text-my-color-4 font-semibold rounded-full shadow-md relative z-10`}
    >
      {label}
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
      className={`absolute inset-0 border-2 ${borderColor} rounded-full`}
    />
  </MotionWrapper>
)

export default CallToAction
