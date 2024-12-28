'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation' // Import usePathname hook
import MotionWrapper from '@/components/MotionWrapper' // Import MotionWrapper
import {
  FaUser,
  FaTools,
  FaLaptopCode,
  FaAward,
  FaEnvelope
} from 'react-icons/fa'

const NavLinks = () => {
  const pathname = usePathname() // Get the current pathname

  const sections = [
    { name: 'introduction', icon: <FaUser /> },
    { name: 'skills', icon: <FaTools /> },
    { name: 'projects', icon: <FaLaptopCode /> },
    { name: 'achievements', icon: <FaAward /> },
    { name: 'contact', icon: <FaEnvelope /> }
  ]

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
              pathname === `/${name}`
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
