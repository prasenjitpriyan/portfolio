'use client'

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Sidebar from '@/components/Sidebar'

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        className="absolute top-4 left-4 z-50 text-my-color-4 text-xl cursor-pointer xl:hidden"
        onClick={handleClick}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <Sidebar isOpen={isOpen} />
    </>
  )
}

export default HamburgerButton
