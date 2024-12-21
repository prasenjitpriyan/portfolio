import React from 'react'

const HamburgerButton = () => {
  return (
    <button
      className="absolute top-4 left-4 z-50 text-my-color-4 text-3xl cursor-pointer xl:hidden"
      onClick={toggleSidebar}
    >
      ☰
    </button>
  )
}

export default HamburgerButton
