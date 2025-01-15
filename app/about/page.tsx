import React from 'react'
import AboutSection from '@/components/AboutSection'
import AboutMe from '@/components/AboutMe'
import AboutMarquee from '@/components/AboutMarquee'
import AboutSkill from '@/components/AboutSkill'
import AboutGithub from '@/components/AboutGithub'
import AboutExpertise from '@/components/AboutExpertise'
import AboutTools from '@/components/AboutTools'
import AboutContact from '@/components/AboutContact'

const AboutPage = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AboutSection />
      <AboutMe />
      <AboutMarquee />
      <AboutSkill />
      <AboutGithub />
      <AboutExpertise />
      <AboutTools />
      <AboutContact />
    </main>
  )
}

export default AboutPage
