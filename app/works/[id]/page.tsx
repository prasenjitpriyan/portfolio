import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import projects from '../../../data/projects'

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

const WorksIdPage = async (props: ProjectPageProps) => {
  const params = await props.params
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
    return null
  }

  return (
    <div className="p-4">
      <Image
        width={1200}
        height={300}
        src={project.image}
        alt={project.title}
        className="w-full h-[300px] object-cover"
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

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id
  }))
}
