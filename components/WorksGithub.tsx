'use client'

import React from 'react'
import Link from 'next/link'
import { IoLogoGithub } from 'react-icons/io'
import { motion } from 'framer-motion'

type GitHubProject = {
  name: string
  link: string
}

const WorksGithub: React.FC = () => {
  const githubProjects: GitHubProject[] = [
    {
      name: 'Project One',
      link: 'https://github.com/your-username/project-one'
    },
    {
      name: 'Project Two',
      link: 'https://github.com/your-username/project-two'
    },
    {
      name: 'Project Three',
      link: 'https://github.com/your-username/project-three'
    },
    {
      name: 'Project Four',
      link: 'https://github.com/your-username/project-four'
    },
    {
      name: 'Project Five',
      link: 'https://github.com/your-username/project-five'
    },
    {
      name: 'Project Six',
      link: 'https://github.com/your-username/project-six'
    },
    {
      name: 'Project Seven',
      link: 'https://github.com/your-username/project-seven'
    },
    {
      name: 'Project Eight',
      link: 'https://github.com/your-username/project-eight'
    },
    {
      name: 'Project Nine',
      link: 'https://github.com/your-username/project-nine'
    },
    {
      name: 'Project Ten',
      link: 'https://github.com/your-username/project-ten'
    },
    {
      name: 'Project Eleven',
      link: 'https://github.com/your-username/project-eleven'
    },
    {
      name: 'Project Twelve',
      link: 'https://github.com/your-username/project-twelve'
    },
    {
      name: 'Project Thirteen',
      link: 'https://github.com/your-username/project-thirteen'
    }
  ]

  return (
    <section className="min-h-screen px-6 py-12 text-jet-black">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center pb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          GitHub Projects
        </motion.h1>
        <motion.p
          className="text-lg text-jet-black text-center pb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Here are some of my projects that I created during my spare time. I
          constantly keep on improving my skills by making these fun projects.
          These projects are available on my{' '}
          <span>
            <Link
              className="underline text-yellow-400 hover:text-yellow-300"
              href={'https://github.com/your-username'}
            >
              GitHub repository.
            </Link>
          </span>
        </motion.p>
        <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-6 md:space-y-0">
          {/* Projects List */}
          <div className="w-full md:w-2/3 space-y-6">
            {githubProjects.map((project, index) => (
              <motion.div
                className="flex items-center bg-ghost-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out font-thin"
                key={project.link}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <p className="text-xl mr-4 md:mr-8 text-jet-black">
                  -/ {String(index + 1).padStart(2, '0')}
                </p>
                <p className="text-xl text-jet-black mr-4 md:mr-8">
                  {'<src/>'}
                </p>
                <p className="text-xl text-jet-black">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </Link>
                </p>
              </motion.div>
            ))}
          </div>
          {/* GitHub Icon */}
          <motion.div
            className="flex justify-center items-center w-1/3 mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1, rotateY: 10, rotateX: 10 }}
            whileTap={{ scale: 0.9, rotateY: -10, rotateX: -10 }}
          >
            <IoLogoGithub className="w-40 h-40 text-jet-black hover:text-yellow-400 transition duration-300 ease-in-out drop-shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WorksGithub
