'use client'

import { FaBars, FaTimes } from 'react-icons/fa'
import { useSidebar } from '@/context/SidebarContext'

const HamburgerButton = () => {
  const { isOpen, toggleSidebar } = useSidebar()

  return (
    <button
      className="fixed top-8 right-8 z-50 text-my-color-4 text-xl cursor-pointer xl:hidden"
      onClick={toggleSidebar}
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  )
}

export default HamburgerButton
