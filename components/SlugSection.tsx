import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Projects } from '@/types/projects'

interface SlugSectionProps {
  project: Projects
}

const SlugSection: React.FC<SlugSectionProps> = ({ project }) => {
  return (
    <section className="min-h-screen overflow-hidden">
      <div className="h-screen">
        <Image
          width={1920}
          height={1080}
          priority
          src={project.slug_hero_image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-screen">
        <h1 className="text-2xl font-bold mt-4">
          {project.number}. {project.title}
        </h1>
        <p className="text-sm text-gray-500">{project.category}</p>
        <Link href={`/works/${project.slug}`}>
          <button className="btn-primary mt-4">Visit Project</button>
        </Link>
      </div>
    </section>
  )
}

export default SlugSection
