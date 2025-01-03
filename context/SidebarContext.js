'use client'

import React, { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

export const useSidebar = () => {
  return useContext(SidebarContext)
}

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}
