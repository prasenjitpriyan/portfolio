import React, { useState } from 'react'

const HamburgerButton = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen) // Toggle the state
    toggleSidebar() // Toggle the sidebar visibility
  }

  return (
    <button
      className="absolute top-4 left-4 z-50 text-my-color-4 text-3xl cursor-pointer xl:hidden"
      onClick={handleClick}
    >
      {isOpen ? '×' : '☰'} {/* Cross icon when open, Hamburger when closed */}
    </button>
  )
}

export default HamburgerButton
