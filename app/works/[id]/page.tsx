import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import projects from '../../../data/projects'

interface ProjectPageProps {
  params: { id: string }
}

const WorksIdPage = async ({ params }: ProjectPageProps) => {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
    return <div>Project not found.</div>
  }

  return (
    <div className="p-4">
      <Image
        width={500}
        height={500}
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover"
      />
      <h1 className="text-2xl font-bold mt-4">
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

// This function generates paths for dynamic routes
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id
  }))
}
