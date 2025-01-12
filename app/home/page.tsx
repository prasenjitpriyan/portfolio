import Crafted from '@/components/Crafted'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import MoreProjects from '@/components/MoreProjects'
import ProjectSection from '@/components/ProjectSection'
import React from 'react'

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <Crafted />
      <ProjectSection />
      <MoreProjects />
      <Footer />
    </main>
  )
}

export default Home
