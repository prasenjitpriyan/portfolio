import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
    <div className="min-h-svh bg-my-color-2 text-my-color-4">
      <div className="max-w-8xl p-8 mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                width={500}
                height={500}
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedPage
