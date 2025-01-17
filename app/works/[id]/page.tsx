import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import projects from '../../../data/projects'
import Image from 'next/image'

interface ProjectPageProps {
  params: { id: string }
}

const WorksIdPage: React.FC<ProjectPageProps> = ({ params }) => {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
    return <div>Project not found.</div>
  }

  return (
    <div>
      <Image
        width={500}
        height={500}
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover"
      />
      <h1>
        {project.number}. {project.title}
      </h1>
      <p className="text-sm text-gray-500">{project.category}</p>
      <Link href={`/works/${project.id}`}>
        <button className="btn-primary mt-4">Visit Project</button>
      </Link>
    </div>
  )
}

export default WorksIdPage
