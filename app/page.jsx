import React from 'react'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import FeaturedPage from '@/pages/FeaturedPage'
import Footer from '@/components/Footer'
import ProjectsPage from '@/pages/ProjectsPage'

const Home = () => {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <FeaturedPage />
      <ProjectsPage />
      <Footer />
    </main>
  )
}

export default Home
