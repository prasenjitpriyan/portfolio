'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutQuote: React.FC = () => {
  return (
    <section className="min-h-[40svh] bg-white text-jet-black px-20 py-20">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-3xl text-center pb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Success is not just about what you accomplish in your life, but what
          you inspire others to do.
        </motion.h1>

        <motion.p
          className="font-thin"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          — Anonymous
        </motion.p>
      </motion.div>
    </section>
  )
}

export default AboutQuote
