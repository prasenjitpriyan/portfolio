'use client'

import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from 'react-icons/rx'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="sticky top-0 z-10 bg-my-color-1 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Image
            src="/pd.png"
            priority
            width={500}
            height={500}
            alt="My Logo"
            className="w-12 h-12"
          />
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <motion.div
                key={link.href}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    pathname === link.href
                      ? 'text-my-color-6'
                      : 'text-my-color-2'
                  }
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              <RxHamburgerMenu className="text-my-color-1 text-3xl hover:text-my-color-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col bg-white rounded shadow-md p-4">
            {links.map((link) => (
              <motion.div
                key={link.href}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    pathname === link.href
                      ? 'font-bold text-my-color-6'
                      : 'text-my-color-2'
                  }
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
