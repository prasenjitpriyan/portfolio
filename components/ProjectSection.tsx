import React from 'react'
import Button from './Button'
import { GoArrowRight } from 'react-icons/go'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Project One',
    category: 'WEB APP',
    link: '/projects/salinaka',
    image: '/images/salinaka-showcase.jpg'
  },
  {
    id: 2,
    number: '02',
    title: 'Project Two',
    category: 'WEB APP',
    link: '/projects/project-two',
    image: '/images/project-two-showcase.jpg'
  },
  {
    id: 3,
    number: '03',
    title: 'Project Three',
    category: 'MOBILE APP',
    link: '/projects/project-three',
    image: '/images/project-three-showcase.jpg'
  },
  {
    id: 4,
    number: '04',
    title: 'Project Four',
    category: 'DESIGN SYSTEM',
    link: '/projects/project-four',
    image: '/images/project-four-showcase.jpg'
  }
]

const ProjectSection: React.FC = () => {
  return (
    <div className="h-[160svh] bg-ghost-white text-gray-300 overflow-hidden border-b-2">
      {projects.map((project) => (
        <div
          key={project.id}
          className="h-1/4 border-t-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
        >
          <div
            className="flex flex-col sm:flex-row items-center justify-between py-10"
            style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
          >
            {/* Left side: Line and project details */}
            <div className="flex items-center mb-4 sm:mb-0">
              {' '}
              {/* Added margin-bottom for small screens */}
              <div className="h-[1px] w-40 bg-gray-300 mr-4" />
              <p className="font-bold text-xl mr-4 text-gray-300">
                {project.number}
              </p>
              <div>
                <h2 className="text-6xl">{project.title}</h2>
                <p className="sub-caps text-sm">{project.category}</p>
              </div>
            </div>

            {/* Right side: View Project button */}
            <div className="flex items-center justify-center w-full sm:w-1/4">
              <Button
                text="VIEW PROJECT"
                href={project.link}
                icon={<GoArrowRight className="text-2xl" />}
                className="relative inline-flex items-center transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectSection
