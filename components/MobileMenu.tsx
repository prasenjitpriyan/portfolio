import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className="md:hidden z-40 focus:outline-none"
        onClick={toggleMenu}>
        {isMenuOpen ? (
          <IoMdClose className="text-3xl" />
        ) : (
          <RxHamburgerMenu className="text-3xl" />
        )}
      </button>

      {/* Full-Screen Menu for Small Screens */}
      {isMenuOpen && (
        <div className="h-screen md:hidden absolute inset-0 bg-black z-40 flex flex-col items-center justify-between text-white">
          {/* Logo and Close Button */}
          <div className="w-full flex justify-between items-center px-8 py-4">
            <Link href="/" onClick={toggleMenu}>
              <Image
                width={50}
                height={50}
                src="/pd-logo-black-and-white.png"
                alt="Prasenjit Das"
                className="rounded-lg max-w-full cursor-pointer"
              />
            </Link>
            <button
              className="text-7xl font-bold cursor-pointer"
              onClick={toggleMenu}>
              <IoMdClose className="text-3xl" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-12">
            {[
              { label: 'Home', href: '/', number: '01' },
              { label: 'About', href: '/about', number: '02' },
              { label: 'Works', href: '/works', number: '03' },
              { label: 'Contact', href: '/contact', number: '04' },
            ].map((item) => (
              <div key={item.number} className="relative group">
                <Link
                  href={item.href}
                  className="text-4xl hover:text-gray-200 flex items-center"
                  onClick={toggleMenu}>
                  {item.label}
                </Link>
                <span
                  className="absolute inset-0 flex items-center justify-center text-8xl text-gray-100 opacity-0 group-hover:opacity-20 group-hover:translate-y-0 transition-all duration-300"
                  style={{ pointerEvents: 'none' }}>
                  {item.number}
                </span>
              </div>
            ))}
          </nav>

          {/* Footer Section */}
          <footer className="w-full flex flex-col items-center pb-6">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer">
                <FaFacebook className="text-xl hover:text-blue-500" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="text-xl hover:text-blue-400" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer">
                <FaLinkedin className="text-xl hover:text-blue-700" />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="text-xl hover:text-gray-300" />
              </Link>
            </div>
            <p className="text-xs text-gray-500">
              © 2025 Prasenjit Das. All rights reserved.
            </p>
          </footer>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
