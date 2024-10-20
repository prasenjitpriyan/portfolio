'use client'

import React from 'react'
import { NavbarDemo } from '@/components/Navbar'
import BackgroundBoxesDemo from '@/components/BackgroundBoxesDemo'
import AboutMe from '@/components/AboutMe'
import FeaturedProjects from '@/components/FeaturedProjects'

export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <BackgroundBoxesDemo />
      <AboutMe />
      <FeaturedProjects />
    </main>
  )
}
