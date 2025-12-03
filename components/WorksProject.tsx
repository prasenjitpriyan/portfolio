import { projects } from '@/data/projects';
import { Projects } from '@/types/projects';
import Image from 'next/image';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import Button from './Button';

const WorksProject: React.FC = () => {
  return (
    <div className="min-h-screen md:h-[320svh] bg-ghost-white text-gray-300 overflow-hidden">
      {projects.map((project: Projects) => (
        <div
          key={project.id}
          className="relative h-auto md:h-[40svh] border-t-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out group">
          <div className="absolute inset-y-0 left-0 w-full group-hover:translate-x-0 translate-x-[-100%] transition-all duration-500 ease-in-out">
            <div className="relative w-full h-full opacity-25 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <Image
                width={1200}
                height={300}
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full opacity-20"
              />
            </div>
          </div>

          {/* Centered Hover Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center group-hover:translate-x-0 transition-all duration-500 ease-in-out">
            <div className="relative w-full h-full opacity-10 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <Image
                width={240}
                height={135}
                src={project.slug_hero_image}
                alt="Hover Landscape Image"
                className="transform translate-x-[100%] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out rounded border-4"
              />
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-between py-10"
            style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
            {/* Left side: Line and project details */}
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="h-[1px] w-40 bg-gray-300 mr-4" />
              <p className="font-bold text-xl mr-4 text-gray-300">
                {project.number}
              </p>
              <div>
                <h2 className="text-3xl md:text-6xl">{project.title}</h2>
                <p className="sub-caps text-sm">{project.category}</p>
              </div>
            </div>

            {/* Right side: View Project button */}
            <div className="flex items-center justify-center w-full sm:w-1/4">
              <Button
                text="VIEW PROJECT"
                href={`/works/${project.slug}`}
                icon={<GoArrowRight className="text-2xl" />}
                className="relative text-black inline-flex items-center transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksProject;
