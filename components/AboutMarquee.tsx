'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

const AboutMarquee: React.FC = () => {
  const keywords = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue.js',
    'Angular',
    'Next.js',
    'Tailwind CSS',
    'Bootstrap',
    'SASS',
    'Less',
    'GraphQL',
    'Webpack',
    'Babel',
    'ES6+',
    'Responsive Design',
    'UI Components',
    'Material UI',
    'Ant Design',
    'React Native',
    'CSS Grid',
    'Flexbox',
    'AJAX',
    'DOM Manipulation',
    'CSS Animations',
    'Web Accessibility',
    'PWA',
    'Node.js',
    'Express',
    'MongoDB',
    'REST API',
    'OAuth',
    'JWT',
    'Serverless',
    'Firebase',
    'Wireframing',
    'Prototyping',
    'Figma'
  ]

  return (
    <div className="h-[40svh] bg-black text-white flex flex-col items-center justify-center gap-16 py-8">
      <Marquee
        pauseOnHover
        direction="right"
        loop={0}
        speed={100}
        className="overflow-hidden"
      >
        {keywords.map((keyword, index) => (
          <motion.span
            key={index}
            className="px-12 text-4xl"
            style={{
              color: '#000',
              fontStyle: 'italic',
              textShadow:
                '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {keyword.toUpperCase()}
          </motion.span>
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        direction="left"
        loop={0}
        speed={100}
        className="overflow-hidden"
      >
        {keywords.map((keyword, index) => (
          <motion.span
            key={index}
            className="px-12 text-4xl"
            style={{
              color: '#000',
              fontStyle: 'italic',
              textShadow:
                '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {keyword.toUpperCase()}
          </motion.span>
        ))}
      </Marquee>
    </div>
  )
}

export default AboutMarquee
