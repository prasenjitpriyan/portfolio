'use client'

import React from 'react'
import { motion } from 'framer-motion'

const IntroductionSection = () => {
  // Array of paragraph words with special words to be bolded
  const paragraphWords = [
    'Hello,',
    'I’m',
    'Prasenjit',
    'Das—a',
    'JavaScript',
    'and',
    'TypeScript',
    'developer',
    'with',
    'a',
    'unique',
    'background',
    'bridging',
    'non-technical',
    'and',
    'tech',
    'fields.',
    'Previously,',
    'I',
    'served',
    'as',
    'a',
    'Postal',
    'Assistant',
    'in',
    'the',
    'Department',
    'of',
    'Posts,',
    'Government',
    'of',
    'India,',
    'for',
    'a',
    'decade,',
    'focusing',
    'on',
    'administrative',
    'tasks',
    'and',
    'customer',
    'service.',
    'This',
    'role',
    'sharpened',
    'my',
    'organizational',
    'skills',
    'and',
    'attention',
    'to',
    'detail,',
    'but',
    'my',
    'interest',
    'in',
    'technology',
    'kept',
    'growing.',
    'Driven',
    'by',
    'curiosity,',
    'I',
    'began',
    'learning',
    'web',
    'development',
    'in',
    'my',
    'free',
    'time,',
    'immersing',
    'myself',
    'in',
    'online',
    'courses',
    'and',
    'coding',
    'challenges.',
    'Over',
    'the',
    'past',
    'two',
    'years,',
    'this',
    'interest',
    'evolved',
    'into',
    'a',
    'passion',
    'and',
    'career,',
    'specializing',
    'in',
    'building',
    'intuitive',
    'and',
    'scalable',
    'web',
    'applications.',
    'I',
    'now',
    'work',
    'with',
    'JavaScript',
    'and',
    'TypeScript',
    'to',
    'create',
    'user-friendly',
    'solutions',
    'and',
    'am',
    'eager',
    'to',
    'keep',
    'growing',
    'as',
    'a',
    'developer.',
    'My',
    'non-technical',
    'background',
    'offers',
    'me',
    'a',
    'unique',
    'perspective,',
    'and',
    'I',
    'aim',
    'to',
    'contribute',
    'to',
    'impactful',
    'projects,',
    'continuously',
    'learning',
    'and',
    'improving',
    'along',
    'the',
    'way.'
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-my-color-4 mb-6">
        About Me
      </h1>
      <motion.div
        className="text-lg mb-6 text-my-color-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } }
        }}
      >
        {paragraphWords.map((word, index) => (
          <motion.span
            key={index}
            className={
              [
                'JavaScript',
                'TypeScript',
                'Postal',
                'Assistant',
                'Government',
                'India',
                'technology',
                'web',
                'development'
              ].includes(word)
                ? 'font-bold'
                : ''
            }
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            {word + ' '}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export default IntroductionSection
