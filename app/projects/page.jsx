'use client'

import React from 'react'
import { useState } from 'react'

const ProjectsPage = () => {
  const [visibleProjects, setVisibleProjects] = useState(3) // Show 3 projects initially
  const [sortOrder, setSortOrder] = useState('latest')

  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description:
        'A web application that displays current weather conditions and forecasts for any location using the OpenWeatherMap API.',
      technologies: ['JavaScript', 'TypeScript', 'React', 'OpenWeatherMap API'],
      liveDemo: 'https://live-demo-weather-app.com',
      repoLink: 'https://github.com/username/weather-app',
      image: '/myIMG.jpg',
      date: new Date(2023, 7, 20)
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description:
        'A personal portfolio website to showcase my skills, projects, and contact information.',
      technologies: ['Next.js', 'Tailwind CSS', 'JavaScript'],
      liveDemo: 'https://live-demo-portfolio.com',
      repoLink: 'https://github.com/username/portfolio-website',
      image: '/myIMG.jpg',
      date: new Date(2022, 9, 5)
    },
    {
      id: 3,
      title: 'E-commerce Store',
      description:
        'A fully functional e-commerce store with payment integration, product management, and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveDemo: 'https://live-demo-ecommerce.com',
      repoLink: 'https://github.com/username/ecommerce-store',
      image: '/myIMG.jpg',
      date: new Date(2023, 2, 15)
    }
    // Additional projects can be added here
  ]

  // Sort projects based on sortOrder
  const sortedProjects = [...projects].sort((a, b) => {
    return sortOrder === 'latest' ? b.date - a.date : a.date - b.date
  })

  // Function to load more projects
  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3)
  }

  return (
    <section className="min-h-[calc(100svh-4rem)] bg-my-color-2 text-my-color-4 p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      {/* Sorting Options */}
      <div className="flex justify-end mb-4">
        <label className="text-gray-600 mr-2">Sort by:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="latest">Latest</option>
          <option value="earliest">Earliest</option>
        </select>
      </div>

      {/* Project Grid */}
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {sortedProjects.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Technologies Used:</span>{' '}
                {project.technologies.join(', ')}
              </p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreProjects}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Load More Projects
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectsPage
