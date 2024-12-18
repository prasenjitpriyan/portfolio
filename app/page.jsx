import React from 'react'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import FeaturedPage from '@/pages/FeaturedPage'
import Footer from '@/components/Footer'
import ProjectsPage from '@/pages/ProjectsPage'
import TestimonialsPage from '@/pages/TestimonialsPage'
import ContactPage from '@/pages/ContactPage'
import CertificatesShowcasePage from '@/pages/CertificatesShowcasePage'

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HomePage />
      <AboutPage />
      <CertificatesShowcasePage />
      <FeaturedPage />
      <ProjectsPage />
      <TestimonialsPage />
      <ContactPage />
      <Footer />
    </main>
  )
}

export default Home
