import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import projects from '../../../data/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

const WorksSlugPage = async (props: ProjectPageProps) => {
  const params = await props.params
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
    return null
  }

  return (
    <div className="p-4">
      <Image
        width={1200}
        height={300}
        priority
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <h1 className="text-2xl font-bold mt-4">
        {project.number}. {project.title}
      </h1>
      <p className="text-sm text-gray-500">{project.category}</p>
      <Link href={`/works/${project.slug}`}>
        <button className="btn-primary mt-4">Visit Project</button>
      </Link>
    </div>
  )
}

export default WorksSlugPage

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }))
}
