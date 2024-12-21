'use client'

import React, { useState } from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-64 p-6 bg-my-color-1 text-my-color-4 z-50 shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 xl:translate-x-0`}
      >
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <Image
            src="/myIMG.jpg"
            width={80}
            height={80}
            alt="Profile of Prasenjit Das"
            className="rounded-full mb-4 border-2 border-my-color-3"
          />
          {/* Name */}
          <h1 className="text-lg font-bold mb-6">Prasenjit Das</h1>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-8">
            <Link
              href="#"
              className="text-my-color-4 hover:text-my-color-3 text-xl"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="text-my-color-4 hover:text-my-color-3 text-xl"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="text-my-color-4 hover:text-my-color-3 text-xl"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-my-color-4 hover:text-my-color-3 text-xl"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="#"
              className="text-my-color-4 hover:text-my-color-3 text-xl"
            >
              <FaGithub />
            </Link>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col items-start space-y-4">
            {[
              'introduction',
              'skills',
              'projects',
              'achievements',
              'contact'
            ].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="hover:text-my-color-3 transition-all"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Hamburger Button */}
      <button
        className="absolute top-4 left-4 z-50 text-my-color-4 text-3xl cursor-pointer xl:hidden"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Main Content */}
      <div className="ml-0 xl:ml-64 flex-1 p-8 bg-my-color-4 text-my-color-1 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Content Section</h1>
        <div id="introduction" className="mb-8">
          <h2 className="text-xl font-semibold">Professional Introduction</h2>
          <p>
            I am a web developer specializing in crafting modern, responsive web
            applications with JavaScript and TypeScript.
          </p>
        </div>
        <div id="skills" className="mb-8">
          <h2 className="text-xl font-semibold">Skills and Expertise</h2>
          <p>
            Proficient in React, Tailwind CSS, and other modern technologies.
          </p>
        </div>
        {/* Footer */}
        <footer className="mt-8 border-t border-my-color-2 pt-4">
          <p className="text-center text-my-color-1">
            &copy; 2024 Prasenjit Das. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Home
