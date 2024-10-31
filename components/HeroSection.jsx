'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-[calc(100svh-4rem)] p-4">
      {/* Text Section */}
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left text-my-color-4 mb-4">
          Crafting Dynamic Web Experiences with JavaScript & TypeScript
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center lg:text-justify text-my-color-4 mb-6 max-w-2xl">
          Hi! I’m Prasenjit Das, a passionate JavaScript and TypeScript
          developer with a knack for creating intuitive and engaging web
          applications. I thrive on turning complex problems into elegant
          solutions and continuously learning new technologies to enhance user
          experiences.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button>
            <Link
              href="/projects"
              className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg transition duration-200 hover:bg-blue-700"
            >
              View My Projects
            </Link>
          </button>
          <button>
            <Link
              href="/contact"
              className="px-6 py-3 text-lg font-semibold text-blue-600 border border-blue-600 rounded-lg shadow-lg transition duration-200 hover:bg-blue-600 hover:text-white"
            >
              Get in Touch
            </Link>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <Image
          width={500}
          height={500}
          src="/myIMG.jpg" // Update with your image path
          alt="Description of the image"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

export default HeroSection
