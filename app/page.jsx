'use client'

import React, { useState } from 'react'
import HamburgerButton from '@/components/HamburgerButton'
import Introduction from '@/components/Introduction'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} />
      <HamburgerButton toggleSidebar={toggleSidebar} />

      <div className="ml-0 xl:ml-64 flex-1 bg-my-color-2 text-my-color-4">
        <Introduction />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
