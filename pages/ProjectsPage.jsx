import React from 'react'
import ProjectsList from '@/components/ProjectsList'
import Button from '@/components/Button'

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
    <section className="min-h-screen bg-my-color-2">
      <div className="max-w-8xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-my-color-4 mb-8">
          Projects Overview
        </h1>
        <ProjectsList projects={projects} />
        {/* More Projects Button */}
        <div className="mt-8 text-center">
          <Button
            href="/projects"
            text="More Projects"
            className="px-6 py-3 text-lg font-semibold text-my-color-2 bg-my-color-4 rounded-lg transition duration-200 hover:bg-my-color-5"
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
