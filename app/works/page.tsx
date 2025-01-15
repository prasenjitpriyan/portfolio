import React from 'react'
import WorksSection from '@/components/WorksSection'
import WorksProject from '@/components/WorksProject'

const WorksPage = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <WorksSection />
      <WorksProject />
    </main>
  )
}

export default WorksPage
