import React from 'react'
import MotionDiv from './MotionDiv'

const Crafted: React.FC = () => {
  return (
    <section className="h-[50svh] relative px-20 py-28 overflow-hidden">
      {/* Heading */}
      <div className="overflow-hidden">
        <MotionDiv
          className="relative text-3xl md:text-5xl font-semibold inline-block text-jet-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          Crafted with love
        </MotionDiv>
      </div>
      <br />

      {/* Paragraph */}
      <div className="overflow-hidden">
        <MotionDiv
          className="text-jet-black text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          These are a selection of my recent works.
        </MotionDiv>
      </div>
    </section>
  )
}

export default Crafted
