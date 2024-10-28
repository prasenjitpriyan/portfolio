import Footer from '@/components/Footer'
import AboutPage from '@/pages/AboutPage'
import FeaturedPage from '@/pages/FeaturedPage'
import HomePage from '@/pages/HomePage'
import ProjectPage from '@/pages/ProjectPage'
import React from 'react'

const Home = () => {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <FeaturedPage />
      <ProjectPage />
      <Footer />
    </main>
  )
}

export default Home
