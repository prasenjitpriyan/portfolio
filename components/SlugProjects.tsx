'use client'

import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Image from 'next/image'
import { Projects } from '@/types/projects'

interface SlugProjectsProps {
  project: Projects
}

const SlugProjects: React.FC<SlugProjectsProps> = ({ project }) => {
  return (
    <div className="flex flex-col overflow-hidden relative">
      <ContainerScroll>
        <Image
          src={project.slug_hero_image}
          alt="hero"
          height={1080}
          width={1920}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <div className="text-6xl w-full bg-black text-white h-[10svh] flex justify-center items-center font-thin">
        KEEP GOING
      </div>
    </div>
  )
}

export default SlugProjects
