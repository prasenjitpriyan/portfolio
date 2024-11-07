import React from 'react'
import IntroductionSection from '@/components/IntroductionSection'
import SkillsSection from '@/components/SkillsSection'
import Timeline from '@/components/Timeline'

const AboutPage = () => (
  <div className="min-h-screen bg-my-color-2 text-my-color-4 flex items-center justify-center">
    <div className="max-w-8xl mx-auto p-8">
      <IntroductionSection />
      <SkillsSection />
      <Timeline />
    </div>
  </div>
)

export default AboutPage
