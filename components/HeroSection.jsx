// HeroSection.js
import React from 'react'
import Title from './Title'
import Description from './Description'
import Button from './Button'
import ImageComponent from './ImageComponent'

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100svh-4rem)] p-6 sm:p-8 md:p-10">
      {/* Text Section */}
      <div className="lg:w-1/2 mb-6 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
        <Title text="Crafting Dynamic Web Experiences with JavaScript & TypeScript" />
        <Description text="Hi! I’m Prasenjit Das, a passionate JavaScript and TypeScript developer with a knack for creating intuitive and engaging web applications. I thrive on turning complex problems into elegant solutions and continuously learning new technologies to enhance user experiences." />
        <div className="flex flex-col sm:flex-row gap-2 space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <Button
            href="/projects"
            text="View My Projects"
            className="px-6 py-3 text-lg font-semibold text-my-color-2 bg-my-color-4 rounded-lg transition duration-200 hover:bg-my-color-5"
          />
          <Button
            href="/contact"
            text="Get in Touch"
            className="px-6 py-3 text-lg font-semibold text-my-color-4 border border-my-color-4 rounded-lg shadow-lg transition duration-200 hover:bg-my-color-5 hover:text-my-color-2"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <ImageComponent src="/myIMG.jpg" alt="Description of the image" />
      </div>
    </section>
  )
}

export default HeroSection
