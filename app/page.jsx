'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import HamburgerButton from '@/components/HamburgerButton'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'

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
        <HeroSection />
        <Footer />
      </div>
    </div>
  )
}

export default Home
