import React from 'react'
import AboutSection from '@/components/AboutSection'
import AboutMe from '@/components/AboutMe'
import AboutMarquee from '@/components/AboutMarquee'

const AboutPage = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AboutSection />
      <AboutMe />
      <AboutMarquee />
    </main>
  )
}

export default AboutPage
