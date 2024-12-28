'use client'

import React, { useState } from 'react'
import HamburgerButton from '@/components/HamburgerButton'
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
        <Footer />
      </div>
    </div>
  )
}

export default Home
