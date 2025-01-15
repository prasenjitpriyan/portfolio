import React from 'react'
import Button from './Button'
import { GoArrowRight } from 'react-icons/go'
import Image from 'next/image'

const WorksProject: React.FC = () => {
  const projects = [
    {
      id: 1,
      number: '01',
      title: 'Project One',
      category: 'WEB APP',
      link: '/projects/salinaka',
      image: '/my.jpg'
    },
    {
      id: 2,
      number: '02',
      title: 'Project Two',
      category: 'WEB APP',
      link: '/projects/project-two',
      image: '/my.jpg'
    },
    {
      id: 3,
      number: '03',
      title: 'Project Three',
      category: 'MOBILE APP',
      link: '/projects/project-three',
      image: '/my.jpg'
    },
    {
      id: 4,
      number: '04',
      title: 'Project Four',
      category: 'DESIGN SYSTEM',
      link: '/projects/project-four',
      image: '/my.jpg'
    },
    {
      id: 5,
      number: '05',
      title: 'Project Five',
      category: 'E-COMMERCE',
      link: '/projects/project-five',
      image: '/my.jpg'
    },
    {
      id: 6,
      number: '06',
      title: 'Project Six',
      category: 'SAAS PLATFORM',
      link: '/projects/project-six',
      image: '/my.jpg'
    },
    {
      id: 7,
      number: '07',
      title: 'Project Seven',
      category: 'BLOG PLATFORM',
      link: '/projects/project-seven',
      image: '/my.jpg'
    },
    {
      id: 8,
      number: '08',
      title: 'Project Eight',
      category: 'PORTFOLIO WEBSITE',
      link: '/projects/project-eight',
      image: '/my.jpg'
    }
  ]

  return (
    <div className="h-[320svh] bg-ghost-white text-gray-300 overflow-hidden">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative h-[40svh] border-t-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out group"
        >
          {/* Background Image for Hover */}
          <div className="absolute inset-y-0 left-0 w-full group-hover:translate-x-0 translate-x-[-100%] transition-all duration-500 ease-in-out">
            <div className="relative w-full h-full opacity-25 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <Image
                width={300}
                height={600}
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-between py-10"
            style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
          >
            {/* Left side: Line and project details */}
            <div className="flex items-center mb-4 sm:mb-0">
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

export default WorksProject
