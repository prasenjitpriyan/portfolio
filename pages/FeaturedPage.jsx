import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MotionDiv from '@/components/MotionDiv'

const FeaturedPage = () => {
  const projects = [
    {
      title: 'Weather App',
      description:
        'A web application that displays current weather conditions and forecasts for any location using the OpenWeatherMap API.',
      technologies: 'JavaScript, TypeScript, React, OpenWeatherMap API',
      demoLink: 'https://example.com/weather-app',
      repoLink: 'https://github.com/yourusername/weather-app',
      image: '/myIMG.jpg' // Replace with actual image path
    },
    {
      title: 'Task Manager',
      description:
        'A task management tool that allows users to create, update, and delete tasks, with drag-and-drop functionality.',
      technologies: 'TypeScript, React, Redux',
      demoLink: 'https://example.com/task-manager',
      repoLink: 'https://github.com/yourusername/task-manager',
      image: '/myIMG.jpg' // Replace with actual image path
    },
    {
      title: 'Portfolio Website',
      description:
        'This very portfolio website, built to showcase my skills and projects while demonstrating responsive design and modern web practices.',
      technologies: 'JavaScript, TypeScript, HTML, CSS',
      demoLink: 'https://example.com/portfolio',
      repoLink: 'https://github.com/yourusername/portfolio',
      image: '/myIMG.jpg' // Replace with actual image path
    }
  ]
  return (
    <div className="min-h-screen bg-my-color-2 text-my-color-4">
      <div className="max-w-8xl p-8 mx-auto">
        <h1 className="text-4xl font-bold text-center text-my-color-4 mb-8">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              className="relative group bg-my-color-4 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }} // Slight zoom on hover
              initial={{ opacity: 0, y: 20 }} // Initial entrance effect
              animate={{ opacity: 1, y: 0 }} // Final position
              transition={{ duration: 0.3, delay: index * 0.2 }} // Staggered entrance
            >
              {/* Project Image */}
              <Image
                width={500}
                height={500}
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-96 object-cover transition-opacity duration-300 group-hover:opacity-20"
              />

              {/* Hover Overlay */}
              <MotionDiv
                className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-my-color-4 bg-opacity-90"
                initial={{ y: -20, opacity: 0 }} // Overlay entrance from top
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <p className="text-sm text-gray-600 mb-4">
                  Technologies Used: {project.technologies}
                </p>
                <div className="flex space-x-4">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub Repo
                  </Link>
                </div>
              </MotionDiv>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedPage
