import React from 'react'
import AboutSection from '@/components/AboutSection'
import AboutMe from '@/components/AboutMe'
import AboutMarquee from '@/components/AboutMarquee'
import AboutSkill from '@/components/AboutSkill'
import AboutGithub from '@/components/AboutGithub'
import AboutExpertise from '@/components/AboutExpertise'
import AboutTools from '@/components/AboutTools'
import AboutContact from '@/components/AboutContact'
import ScrollToTop from '@/components/ScrollToTop'
import AboutQuote from '@/components/AboutQuote'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Prasenjit Das || About',
  description:
    'From delivering postal services to delivering code – Crafting solutions with JavaScript & TypeScript.'
}

const AboutPage = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <AboutSection />
      <AboutMe />
      <AboutMarquee />
      <AboutSkill />
      <AboutGithub />
      <AboutExpertise />
      <AboutTools />
      <AboutContact />
      <AboutQuote />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default AboutPage
