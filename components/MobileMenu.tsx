import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

interface MobileMenuProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className="md:hidden z-40 focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <IoMdClose className="text-3xl" />
        ) : (
          <RxHamburgerMenu className="text-3xl" />
        )}
      </button>

      {/* Full-Screen Menu for Small Screens */}
      {isMenuOpen && (
        <div className="h-screen md:hidden absolute inset-0 bg-jet-black z-40 flex flex-col items-center justify-center text-white space-y-6">
          <Link
            href="/"
            className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4"
          >
            <Image
              width={50}
              height={50}
              src="/pd-logo-black-and-white.png"
              alt="Prasenjit Das"
              className="rounded-lg max-w-full cursor-pointer"
            />
          </Link>
          <button
            className="absolute px-8 top-0 right-0 text-2xl font-bold cursor-pointer"
            onClick={toggleMenu}
          >
            <IoMdClose className="text-3xl" />
          </button>
          <Link
            href="/"
            className="text-2xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-2xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/works"
            className="text-2xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Works
          </Link>
          <Link
            href="/contact"
            className="text-2xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  )
}

export default MobileMenu
