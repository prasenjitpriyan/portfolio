import React from 'react'
import MotionDiv from './MotionDiv'
import Button from './Button'
import { GoArrowRight } from 'react-icons/go'

const HeroLeftSection: React.FC = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 space-y-6 z-10 text-center md:text-left"
    >
      <MotionDiv
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="text-3xl md:text-5xl font-semibold"
      >
        From Delivering Postal Services to Delivering Code
      </MotionDiv>
      <MotionDiv
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        className="text-lg"
      >
        Hi, I&apos;m <span className="font-bold">Prasenjit Das</span>, a
        passionate Front-end Developer, based in India.
      </MotionDiv>
      <MotionDiv
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        className="flex justify-center md:justify-start"
      >
        <Button
          text="SEE MY WORKS"
          href="/works"
          icon={<GoArrowRight className="text-2xl" />}
          className="relative inline-flex items-center"
        />
      </MotionDiv>
    </MotionDiv>
  )
}

export default HeroLeftSection
