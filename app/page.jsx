import React from 'react'
import MotionWrapper from '@/components/MotionWrapper'
import { ImagesSlider } from '@/components/ui/images-slider'
import firstPhase from '@/assets/images/First.jpeg'
import secondPhase from '@/assets/images/second.jpeg'
import thirdPhase from '@/assets/images/third.jpeg'
import fourthPhase from '@/assets/images/four.jpeg'
import Link from 'next/link'

const Home = () => {
  const images = [firstPhase, secondPhase, thirdPhase, fourthPhase]

  return (
    <section className="min-h-[calc(100vh-2rem)] bg-my-color-1 m-4 p-4 rounded-md">
      <ImagesSlider className="h-[40rem] rounded" images={images}>
        <MotionWrapper
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center"
        >
          {/* Tagline */}
          <MotionWrapper className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            From Delivering Postal Services to Delivering Code <br />
            <span className="text-lg md:text-3xl">
              Crafting Solutions with JavaScript & TypeScript
            </span>
          </MotionWrapper>

          {/* Call-to-Actions */}
          <div className="flex gap-4 mt-6">
            <Link
              href="/projects"
              className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative"
            >
              <span>View My Projects</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 backdrop-blur-sm border bg-sky-300/10 border-sky-500/20 text-white mx-auto text-center rounded-full relative"
            >
              <span>Get in Touch</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-sky-500 to-transparent" />
            </Link>
          </div>
        </MotionWrapper>
      </ImagesSlider>
    </section>
  )
}

export default Home
