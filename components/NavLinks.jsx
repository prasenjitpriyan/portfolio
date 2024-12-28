'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import MotionWrapper from '@/components/MotionWrapper' // Import MotionWrapper
import {
  FaUser,
  FaTools,
  FaLaptopCode,
  FaAward,
  FaEnvelope
} from 'react-icons/fa'

const NavLinks = () => {
  const [activeSection, setActiveSection] = useState('introduction')

  const sections = [
    { name: 'introduction', icon: <FaUser /> },
    { name: 'skills', icon: <FaTools /> },
    { name: 'projects', icon: <FaLaptopCode /> },
    { name: 'achievements', icon: <FaAward /> },
    { name: 'contact', icon: <FaEnvelope /> }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.name)
      )

      sectionElements.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sections[index].name)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  return (
    <nav className="flex flex-col items-start space-y-6">
      {sections.map(({ name, icon }) => (
        <MotionWrapper
          key={name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Link
            href={`/${name}`}
            className={`flex rounded w-64 items-center space-x-2 p-2 transition-all duration-300 ${
              activeSection === name
                ? 'bg-my-color-3 text-my-color-1 font-bold'
                : 'hover:bg-my-color-2 hover:text-my-color-3'
            }`}
          >
            {icon}
            <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
          </Link>
        </MotionWrapper>
      ))}
    </nav>
  )
}

export default NavLinks
