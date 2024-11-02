import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Resume = () => {
  return (
    <div className="min-h-[calc(100svh-4rem)] bg-my-color-2 text-my-color-4">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Prasenjit Das</h1>
          <p className="mt-2 text-gray-600 text-justify">
            Hello! I am Prasenjit Das, Link dedicated JavaScript and TypeScript
            developer with Link unique journey that bridges the gap between the
            non-technical and tech industries. For ten years, I was Link Postal
            Assistant in the Department of Posts, Government of India. My work
            involved administrative tasks, customer service, and operational
            efficiency. Although this job taught me organizational skills and
            attention to detail, the desire to learn more about technology and
            how the web works was always there, in the background. Having worked
            on the day-to-day operations for years, I finally decided to get
            involved in web development as Link hobby during my free time.
            Online courses, tutorials, and coding challenges filled my free time
            to learn how web applications are built and work. It then became
            Link passion that exceeded mere hobby status, sparking within me the
            desire to realize ideas through code. For the past two years, I have
            been actively working on web applications, and my specialties are
            JavaScript and TypeScript. My journey as Link developer has been
            incredibly rewarding, where I have been able to develop intuitive
            and engaging applications with talented teams who envision creating
            scalable solutions. I enjoy solving complex problems, learning new
            technologies, and best practices in software development in order to
            create the best user experience possible. I am excited today to see
            the possibilities that technology affords and am committed to
            continuous learning and improvement. My non-technical background
            gives me Link different perspective that I apply in my developer
            work. I believe in the powers that technology can make and will
            apply my skills toward projects that have Link meaningful impact.
          </p>

          {/* Download Resume Button */}
          <Link
            href="/resume.pdf" // Update this path to your resume file
            download
            className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Download Resume
          </Link>
        </div>

        {/* Contact Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <Link
            href="https://linkedin.com/in/prasenjitdass"
            className="text-gray-600 flex items-center"
          >
            <FaLinkedin className="mr-2" /> linkedin.com/in/prasenjitdass
          </Link>
          <Link
            href="mailto:prasenjitpriyan@icloud.com"
            className="text-gray-600 flex items-center"
          >
            <FaEnvelope className="mr-2" /> prasenjitpriyan@icloud.com
          </Link>
          <Link
            href="tel:+919038332076"
            className="text-gray-600 flex items-center"
          >
            <FaPhoneAlt className="mr-2" /> +91 9038332076
          </Link>
          <Link
            href="https://github.com/prasenjitpriyan"
            className="text-gray-600 flex items-center"
          >
            <FaGithub className="mr-2" /> prasenjitpriyan
          </Link>
        </div>

        {/* Work Experience Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Work Experience
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Intern at VeriTech Software IT Services
            </h3>
            <p className="text-sm text-gray-500">Feb 2024 - Present</p>
            <p className="text-gray-600 mt-1">
              Learning real-world projects in web development and refining web
              development skills.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Web Development Intern at Cognifyz Technologies
            </h3>
            <p className="text-sm text-gray-500">Feb 2024 - Present</p>
            <p className="text-gray-600 mt-1">
              Working on real projects, gaining hands-on experience, and
              building skills under experienced professionals.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Postal Assistant, Department of Posts, India
            </h3>
            <p className="text-sm text-gray-500">Jun 2014 - Present</p>
            <ul className="text-gray-600 mt-1 list-disc pl-5">
              <li>Sorting, processing, and dispatching mail and packages.</li>
              <li>
                Managing postal records and handling financial transactions.
              </li>
              <li>
                Adhering to postal regulations and maintaining security
                protocols.
              </li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Educational Background
          </h2>
          <div>
            <h3 className="text-lg font-semibold">Masters in Geography</h3>
            <p className="text-sm text-gray-500">
              Chatrapati Sahuji Maharaj Kanpur University, Kanpur • May 2008 -
              Apr 2010
            </p>
            <p className="text-gray-600">
              Focus: Climate Change Modeling, Advanced GIS, Sustainable
              Development
            </p>
          </div>
        </section>

        {/* Licenses and Certifications */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Licenses and Certifications
          </h2>
          <p className="text-gray-600">
            Full-Stack Development Bootcamp • May 2023 - Nov 2023 (upGrad
            KnowledgeHut, in collaboration with Golden Gate University)
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Skills</h2>
          <div>
            <h3 className="font-semibold">Technical Skills</h3>
            <p className="text-gray-600">
              HTML, CSS, Tailwind, JavaScript, TypeScript, React, Next.js,
              Three.js, MongoDB, Express, Node.js, Git, GitHub, Bootstrap
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Tools/Software</h3>
            <p className="text-gray-600">
              VS Code, Adobe Photoshop, Figma, Microsoft Office, Canva
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Languages</h3>
            <p className="text-gray-600">
              English (Fluent), Hindi (Fluent), Bengali (Proficient)
            </p>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Certifications / Short Courses
          </h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Hackathon Participation</li>
            <li>React Zero to Hero</li>
            <li>Node.js Zero to Hero</li>
            <li>HTML & CSS Zero to Hero</li>
            <li>Full Stack from upGrad</li>
            <li>Meta Front-End Developer Professional Certificate</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Projects</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>
              Led development of Link dynamic blog page with interactive content
              and MERN stack.
            </li>
            <li>
              Headed the creation of Link real estate webpage connecting buyers
              and sellers, using MERN stack functionalities.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Resume
