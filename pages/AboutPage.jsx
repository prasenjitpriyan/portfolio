import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-svh bg-my-color-2 text-my-color-4">
      <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Me
        </h1>

        {/* Introduction */}
        <p className="text-lg text-my-color-4 mb-4 text-justify">
          Hello! I am Prasenjit Das, a dedicated JavaScript and TypeScript
          developer with a unique journey that bridges the gap between the
          non-technical and tech industries. For ten years, I was a Postal
          Assistant in the Department of Posts, Government of India. My work
          involved administrative tasks, customer service, and operational
          efficiency. Although this job taught me organizational skills and
          attention to detail, the desire to learn more about technology and how
          the web works was always there, in the background. Having worked on
          the day-to-day operations for years, I finally decided to get involved
          in web development as a hobby during my free time. Online courses,
          tutorials, and coding challenges filled my free time to learn how web
          applications are built and work. It then became a passion that
          exceeded mere hobby status, sparking within me the desire to realize
          ideas through code. For the past two years, I have been actively
          working on web applications, and my specialties are JavaScript and
          TypeScript. My journey as a developer has been incredibly rewarding,
          where I have been able to develop intuitive and engaging applications
          with talented teams who envision creating scalable solutions. I enjoy
          solving complex problems, learning new technologies, and best
          practices in software development in order to create the best user
          experience possible. I am excited today to see the possibilities that
          technology affords and am committed to continuous learning and
          improvement. My non-technical background gives me a different
          perspective that I apply in my developer work. I believe in the powers
          that technology can make and will apply my skills toward projects that
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
