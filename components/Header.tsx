import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

const Header: React.FC<{ toggleMenu: () => void; isMenuOpen: boolean }> = ({
  toggleMenu,
  isMenuOpen
}) => {
  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/works', label: 'Works' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-30">
      <Logo />

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-lg">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="relative group">
                {link.label}
                <span className="absolute left-0 top-1/2 w-0 h-[2px] bg-black transform -translate-y-1/2 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  )
}

export default Header
