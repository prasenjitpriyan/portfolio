'use client'
import React from 'react'
import { motion, useAnimationFrame } from 'framer-motion'

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'John Doe',
      text: 'Working with Prasenjit Das was a game-changer for our project. Their expertise in JavaScript and TypeScript made complex tasks feel manageable.'
    },
    {
      name: 'Jane Smith',
      text: 'Prasenjit is a highly skilled developer. Their commitment to delivering quality work and effective solutions has made a significant impact on our team.'
    },
    {
      name: 'Alice Johnson',
      text: "I appreciated Prasenjit's attention to detail and ability to simplify challenging concepts. They are a true asset to any project."
    },
    {
      name: 'Michael Brown',
      text: "Prasenjit's technical acumen and dedication to problem-solving are unmatched. Our project's success is a testament to their expertise."
    },
    {
      name: 'Michael Brown',
      text: "Prasenjit's technical acumen and dedication to problem-solving are unmatched. Our project's success is a testament to their expertise."
    },
    {
      name: 'Michael Brown',
      text: "Prasenjit's technical acumen and dedication to problem-solving are unmatched. Our project's success is a testament to their expertise."
    },
    {
      name: 'Michael Brown',
      text: "Prasenjit's technical acumen and dedication to problem-solving are unmatched. Our project's success is a testament to their expertise."
    },
    {
      name: 'Michael Brown',
      text: "Prasenjit's technical acumen and dedication to problem-solving are unmatched. Our project's success is a testament to their expertise."
    }
  ]

  // Duplicate testimonials for an infinite scrolling effect
  const infiniteTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="min-h-[30rem] bg-my-color-2 py-12">
      <div className="max-w-8xl p-8 mx-auto text-center">
        <h1 className="text-4xl font-bold text-my-color-4 mb-8">
          Testimonials
        </h1>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-8"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: infiniteTestimonials.length * 3
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] bg-my-color-4 rounded-lg shadow-lg p-6"
              >
                <p className="text-my-color-2 italic mb-4">
                  “{testimonial.text}”
                </p>
                <h3 className="font-semibold text-my-color-2">
                  — {testimonial.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsPage
