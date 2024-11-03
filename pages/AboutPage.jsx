import React from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiVuedotjs,
  SiGithub
} from 'react-icons/si'

const AboutPage = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React.js', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Angular.js', icon: <SiAngular /> },
    { name: 'Vue.js', icon: <SiVuedotjs /> },
    { name: 'Github', icon: <SiGithub /> }
  ]

  return (
    <div className="min-h-screen bg-my-color-2 text-my-color-4 flex items-center justify-center">
      <div className="max-w-8xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Me
        </h1>

        {/* Introduction */}
        <p className="text-lg mb-6 text-justify text-gray-700">
          Hello, I’m Prasenjit Das—a JavaScript and TypeScript developer with a
          unique background bridging non-technical and tech fields. Previously,
          I served as a Postal Assistant in the Department of Posts, Government
          of India, for a decade, focusing on administrative tasks and customer
          service. This role sharpened my organizational skills and attention to
          detail, but my interest in technology kept growing. Driven by
          curiosity, I began learning web development in my free time, immersing
          myself in online courses and coding challenges. Over the past two
          years, this interest evolved into a passion and career, specializing
          in building intuitive and scalable web applications. I now work with
          JavaScript and TypeScript to create user-friendly solutions and am
          eager to keep growing as a developer. My non-technical background
          offers me a unique perspective, and I aim to contribute to impactful
          projects, continuously learning and improving along the way.
        </p>

        {/* Skills Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>Frameworks/Libraries: React, Node.js, Angular, Vue.js</li>
          <li>Tools: Git, Webpack, Babel</li>
          <li>Testing: Jest, Cypress</li>
          <li>Design: Responsive Design, UX/UI Principles</li>
        </ul>

        {/* Skill Icons/Badges */}
        <div className="flex flex-wrap justify-center mb-6 space-x-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-16 h-16 bg-my-color-4 rounded-full flex items-center justify-center text-my-color-2 text-3xl mb-4 shadow-md 
                     hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
            >
              {skill.icon}
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Experience:
        </h2>
        <ul className="list-decimal list-inside text-gray-700">
          <li>
            <strong>
              Postal Assistant at Department of Posts (2014 - 2024):
            </strong>{' '}
            Developed [specific applications or features], enhancing user
            experience and performance.
          </li>
          <li>
            <strong>[Freelance/Personal Projects]:</strong> Worked on various
            projects, showcasing my ability to deliver quality code and
            effective solutions.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage
