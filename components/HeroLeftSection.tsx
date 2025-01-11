import React from 'react'
import Button from './Button'
import { GoArrowRight } from 'react-icons/go'

const HeroLeftSection: React.FC = () => {
  return (
    <div className="flex-1 space-y-6 z-10 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-semibold">
        From Delivering Postal Services to Delivering Code
      </h1>
      <p className="text-lg">
        Hi, I&apos;m <span className="font-bold">Prasenjit Das</span>, a
        passionate Front-end Developer, based in India.
      </p>
      <div className="flex justify-center md:justify-start">
        <Button
          text="SEE MY WORKS"
          href="/works"
          icon={<GoArrowRight className="text-2xl" />}
          className="relative inline-flex items-center"
        />
      </div>
    </div>
  )
}

export default HeroLeftSection
