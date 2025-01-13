'use client'

import React, { useState } from 'react'
import Header from './Header'

const WorksSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }
  return (
    <section className="relative h-screen bg-ghost-white text-jet-black flex flex-col">
      {/* Header */}
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </section>
  )
}

export default WorksSection
