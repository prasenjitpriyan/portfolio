import React from 'react'
import AboutTable from './AboutTable'

const AboutTools: React.FC = () => {
  return (
    <section className="min-h-[90svh] w-full overflow-hidden bg-ghost-white text-jet-black flex flex-wrap px-20">
      {/* Left Grid */}
      <div className="w-full h-1/6 md:w-1/3 p-4 md:h-full">
        <div className="flex gap-12">
          <p className="font-thin">/ 01 -</p>
          <p className="font-thin">SKILLS</p>
        </div>
      </div>
      {/* Right Grid */}
      <div className="w-full h-5/6 md:w-2/3 p-4 md:h-full">
        <div className="max-w-4xl">
          <h2 className="text-xl font-semibold text-my-color-1 pb-8">
            What I Use
          </h2>
          <p className="text-justify pb-8">
            I use a number of tools that make design and development much
            easier. I usually use Adobe XD or Figma interchangeably for doing
            all the process that includes wireframing, prototyping and visual
            design. For wireframing alone, any graphic design tool can make the
            job done either it is low fidelity or high fidelity wireframe. For
            development/coding, I use different tools specific to the
            development of the application or website. Listed below are the
            tools and technologies that I use and I&apos;m knowledgeable with.
          </p>
          <AboutTable />
        </div>
      </div>
    </section>
  )
}

export default AboutTools
