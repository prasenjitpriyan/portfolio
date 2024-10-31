import Link from 'next/link'
import React from 'react'

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Weather App',
      description:
        'A web application that displays current weather conditions and forecasts for any location using the OpenWeatherMap API.',
      technologies: ['JavaScript', 'TypeScript', 'React', 'OpenWeatherMap API'],
      codeExample: `const fetchWeather = async (location) => {
      const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${location}&appid=YOUR_API_KEY\`);
      return await response.json();
    };`,
      challenges:
        'Integrating the OpenWeatherMap API and handling various response formats.',
      solutions:
        'Used error handling and validation to ensure a smooth user experience.',
      lessons:
        'Improved skills in API integration and state management in React.',
      image: '/myIMG.jpg' // Replace with actual image path
    },
    {
      title: 'Task Manager',
      description:
        'A task management tool that allows users to create, update, and delete tasks, with drag-and-drop functionality.',
      technologies: ['TypeScript', 'React', 'Redux'],
      codeExample: `const addTask = (task) => ({
      type: 'ADD_TASK',
      payload: task,
    });`,
      challenges: 'Implementing drag-and-drop functionality for tasks.',
      solutions:
        'Utilized React DnD library for smooth drag-and-drop interactions.',
      lessons:
        'Learned more about state management with Redux and user experience design.',
      image: '/myIMG.jpg' // Replace with actual image path
    },
    {
      title: 'Portfolio Website',
      description:
        'This very portfolio website, built to showcase my skills and projects while demonstrating responsive design and modern web practices.',
      technologies: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
      codeExample: `<h1 className="text-4xl font-bold">Hello, World!</h1>`,
      challenges: 'Creating a responsive design that works on various devices.',
      solutions:
        'Used Tailwind CSS to implement a mobile-first design approach.',
      lessons:
        'Gained experience in responsive web design and best practices for accessibility.',
      image: '/myIMG.jpg' // Replace with actual image path
    }
  ]
  return (
    <section className="min-h-screen bg-gray-100 p-6 sm:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Projects Overview
        </h1>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Technologies Used:
                </h3>
                <ul className="list-disc list-inside mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-gray-600">
                      {tech}
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Code Example:
                </h3>
                <pre className="bg-gray-200 p-3 rounded mb-4">
                  <code>{project.codeExample}</code>
                </pre>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Challenges & Solutions:
                </h3>
                <p className="text-gray-600 mb-4">{project.challenges}</p>
                <p className="text-gray-600 mb-4">{project.solutions}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Lessons Learned:
                </h3>
                <p className="text-gray-600">{project.lessons}</p>
              </div>
            </div>
          ))}
        </div>
        {/* More Projects Button */}
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            More Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
