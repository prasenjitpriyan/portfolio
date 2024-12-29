import React from 'react'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import MotionWrapper from '@/components/MotionWrapper'

const IntroductionPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-[calc(100vh-2rem)] bg-my-color-1 m-4 p-4 rounded-md">
      <BackgroundBeamsWithCollision>
        <MotionWrapper
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <MotionWrapper
            className="text-4xl font-bold text-my-color-3 mb-6"
            variants={fadeInUp}
          >
            About Me
          </MotionWrapper>

          {/* About Me Snapshot Section */}
          <MotionWrapper className="mb-12" variants={fadeInUp}>
            <p className="text-lg leading-relaxed">
              For over ten years, I worked as a Postal Assistant, perfecting the
              precision and dedication needed to provide seamless communication
              for hundreds of thousands of people. During this process, I
              developed an interest in problem-solving and creativity that led
              me to coding.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Today, I focus on building intuitive and impactful web
              applications in JavaScript and TypeScript. From postal services
              delivery to delivering code, I am driven by a need to make
              meaningful digital experiences that make a difference.
            </p>
          </MotionWrapper>

          {/* Key Stats or Highlights Section */}
          <MotionWrapper variants={fadeInUp}>
            <ul className="list-disc pl-5 text-lg leading-relaxed space-y-2">
              <li>
                <MotionWrapper variants={fadeInUp}>
                  2+ years of experience crafting modern web solutions as a
                  Front-End Developer.
                </MotionWrapper>
              </li>
              <li>
                <MotionWrapper variants={fadeInUp}>
                  Proficient in JavaScript, TypeScript, React, and Tailwind CSS.
                </MotionWrapper>
              </li>
              <li>
                <MotionWrapper variants={fadeInUp}>
                  Currently exploring Motion and GSAP animations to create
                  immersive user interfaces.
                </MotionWrapper>
              </li>
            </ul>
          </MotionWrapper>
        </MotionWrapper>
      </BackgroundBeamsWithCollision>
    </div>
  )
}

export default IntroductionPage
