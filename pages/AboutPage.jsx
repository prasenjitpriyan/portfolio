import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-svh bg-my-color-2 text-my-color-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Me
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-4">
          Hello! I’m Prasenjit Das, a dedicated JavaScript and TypeScript
          developer with a unique journey that bridges the gap between the
          non-technical and tech industries. For a decade, I served as a Postal
          Assistant in the Department of Posts, Government of India, where my
          work revolved around administrative tasks, customer service, and
          operational efficiency. While this role honed my organizational skills
          and attention to detail, my curiosity for technology and the evolution
          of the web was always simmering beneath the surface. After years of
          managing day-to-day operations, I decided to delve into the world of
          web development during my off-hours. I immersed myself in online
          courses, tutorials, and coding challenges, dedicating my free time to
          understanding how web applications are built and function. This
          pursuit became more than just a hobby; it ignited a passion within me
          to transform ideas into reality through code. For the past two years,
          I have been actively developing web applications, specializing in
          JavaScript and TypeScript. My journey as a developer has been
          incredibly rewarding, allowing me to not only build intuitive and
          engaging applications but also collaborate with talented teams that
          share a vision for creating scalable solutions. I thrive on solving
          complex problems, learning new technologies, and applying best
          practices in software development to enhance user experiences. Today,
          I am excited about the possibilities that technology offers and remain
          committed to continuous learning and improvement. My background in a
          non-technical field gives me a unique perspective that I bring to my
          work as a developer. I believe in the power of technology to make a
          difference, and I am eager to contribute my skills to projects that
          have a meaningful impact.
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

        {/* Skill Icons/Badges Placeholder */}
        <div className="flex flex-wrap justify-center mb-6">
          {/* Replace these with actual skill icons or badges */}
          <span className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mb-4">
            JS
          </span>
          <span className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mb-4">
            TS
          </span>
          <span className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mb-4">
            React
          </span>
          <span className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mb-4">
            Node
          </span>
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
