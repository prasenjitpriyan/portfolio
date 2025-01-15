import React from 'react'
import WorksSection from '@/components/WorksSection'
import WorksProject from '@/components/WorksProject'
import WorksGithub from '@/components/WorksGithub'

const WorksPage = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <WorksSection />
      <WorksProject />
      <WorksGithub />
    </main>
  )
}

export default WorksPage
