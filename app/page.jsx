import React from 'react'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import FeaturedPage from '@/pages/FeaturedPage'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <FeaturedPage />
      <Footer />
    </main>
  )
}

export default Home
