import React from 'react'
import WorksSection from '@/components/WorksSection'
import WorksProject from '@/components/WorksProject'
import WorksGithub from '@/components/WorksGithub'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const WorksPage = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <WorksSection />
      <WorksProject />
      <WorksGithub />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default WorksPage
