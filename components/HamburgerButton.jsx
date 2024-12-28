import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const HamburgerButton = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    toggleSidebar()
  }

  return (
    <button
      className="absolute top-4 left-4 z-50 text-my-color-4 text-xl cursor-pointer xl:hidden"
      onClick={handleClick}
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  )
}

export default HamburgerButton
