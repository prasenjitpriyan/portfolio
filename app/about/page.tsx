import React from 'react'
import AboutSection from '@/components/AboutSection'
import AboutMe from '@/components/AboutMe'
import AboutMarquee from '@/components/AboutMarquee'
import AboutSkill from '@/components/AboutSkill'

const AboutPage = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AboutSection />
      <AboutMe />
      <AboutMarquee />
      <AboutSkill />
    </main>
  )
}

export default AboutPage
