import React from 'react'
import SlugSection from '@/components/SlugSection'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { Projects } from '@/types/projects'
import ScrollToTop from '@/components/ScrollToTop'
import SlugAbout from '@/components/SlugAbout'
import SlugProjects from '@/components/SlugProjects'
import SlugNextPrevProjects from '@/components/SlugNextPrevProjects'
import Footer from '@/components/Footer'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'This project does not exist.'
    }
  }

  return {
    title: `Prasenjit Das || ${project.title}`,
    description: `Learn more about ${project.title} in the ${project.category} category.`,
    openGraph: {
      title: project.title,
      description: `Explore details about ${project.title}.`,
      images: [
        {
          url: project.slug_hero_image,
          width: 1200,
          height: 630,
          alt: project.title
        }
      ]
    }
  }
}

const WorksSlugPage = async (props: ProjectPageProps) => {
  const params = await props.params
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
    return null
  }

  return (
    <main className="min-h-screen overflow-hidden bg-ghost-white relative">
      <SlugSection project={project} />
      <SlugAbout project={project} />
      <SlugProjects project={project} />
      <SlugNextPrevProjects project={project} projects={projects} />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default WorksSlugPage

export async function generateStaticParams() {
  return projects.map((project: Projects) => ({
    slug: project.slug
  }))
}
