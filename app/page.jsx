import React from 'react'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import FeaturedPage from '@/pages/FeaturedPage'
import Footer from '@/components/Footer'
import ProjectsPage from '@/pages/ProjectsPage'
import BlogPage from '@/pages/BlogPage'
import TestimonialsPage from '@/pages/TestimonialsPage'
import ContactPage from '@/pages/ContactPage'
import CertificatesShowcasePage from '@/pages/CertificatesShowcasePage'

const Home = () => {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <CertificatesShowcasePage />
      <FeaturedPage />
      <ProjectsPage />
      <BlogPage />
      <TestimonialsPage />
      <ContactPage />
      <Footer />
    </main>
  )
}

export default Home
