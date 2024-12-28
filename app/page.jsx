import React from 'react'
import Sidebar from '@/components/Sidebar'
import Introduction from '@/components/Introduction'
import HamburgerButton from '@/components/HamburgerButton'
import Footer from '@/components/Footer'
import Skills from '@/components/skills'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <HamburgerButton />
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
