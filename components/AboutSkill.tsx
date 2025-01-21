'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutSkill: React.FC = () => {
  const sections = [
    {
      title: 'Core Front-End Development',
      skills: [
        'Proficient in JavaScript and TypeScript.',
        'Skilled in React.js and Next.js for scalable web app development.',
        'Adept at using Tailwind CSS for responsive and modern UI designs.',
        'Experienced in implementing smooth animations with GSAP and Framer Motion.'
      ]
    },
    {
      title: 'Web Development Fundamentals',
      skills: [
        'Strong grasp of HTML5 and CSS3 standards.',
        'Knowledge of WCAG accessibility principles for inclusive design.',
        'Familiarity with SEO best practices to optimize website performance.'
      ]
    },
    {
      title: 'Back-End Integration',
      skills: [
        'Basic understanding of Node.js and Express.js.',
        'Experience managing databases with MongoDB.',
        'Skilled in integrating REST APIs for dynamic web solutions.'
      ]
    },
    {
      title: 'Project Management and Deployment',
      skills: [
        'Proficient with Git and GitHub for version control.',
        'Experienced in deploying projects using platforms like Vercel and Netlify.',
        'Familiar with using JSON Server for mock backends in small projects.'
      ]
    }
  ]

  return (
    <motion.section
      className="min-h-screen w-full overflow-hidden bg-ghost-white text-jet-black flex flex-wrap px-20 pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Grid */}
      <motion.div
        className="w-full h-1/6 md:w-1/3 p-4 md:h-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex gap-12">
          <p className="font-thin">/ 01 -</p>
          <p className="font-thin">SKILLS</p>
        </div>
      </motion.div>
      {/* Right Grid */}
      <div className="w-full h-5/6 md:w-2/3 p-4 md:h-full">
        <div className="max-w-4xl">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h2 className="text-xl font-semibold text-my-color-1 mb-4">
                {section.title}
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {section.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSkill
