'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AboutTable from './AboutTable'

const AboutTools: React.FC = () => {
  return (
    <section className="min-h-[90svh] w-full overflow-hidden bg-ghost-white text-jet-black flex flex-wrap px-20">
      {/* Left Grid */}
      <motion.div
        className="w-full h-1/6 md:w-1/3 p-4 md:h-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex gap-12">
          <p className="font-thin">/ 04 -</p>
          <p className="font-thin">TOOLS</p>
        </div>
      </motion.div>

      {/* Right Grid */}
      <motion.div
        className="w-full h-5/6 md:w-2/3 p-4 md:h-full"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-xl font-semibold text-my-color-1 pb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What I Use
          </motion.h2>
          <motion.p
            className="text-justify pb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I use a number of tools that make design and development much
            easier. I usually use Adobe XD or Figma interchangeably for doing
            all the process that includes wireframing, prototyping and visual
            design. For wireframing alone, any graphic design tool can make the
            job done either it is low fidelity or high fidelity wireframe. For
            development/coding, I use different tools specific to the
            development of the application or website. Listed below are the
            tools and technologies that I use and I&apos;m knowledgeable with.
          </motion.p>
          <AboutTable />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutTools
