'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const AboutContact: React.FC = () => {
  const socialLinks = [
    { href: 'https://github.com', label: 'GitHub' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://facebook.com', label: 'Facebook' },
    { href: 'https://twitter.com', label: 'Twitter' }
  ]

  return (
    <section className="min-h-[40svh] w-full overflow-hidden bg-ghost-white text-jet-black flex flex-wrap px-20">
      {/* Left Grid */}
      <motion.div
        className="w-full h-1/6 md:w-1/3 p-4 md:h-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex gap-12">
          <p className="font-thin">/ 05 -</p>
          <p className="font-thin">CONTACT</p>
        </div>
      </motion.div>
      {/* Right Grid */}
      <div className="w-full h-5/6 md:w-2/3 p-4 md:h-full">
        <div className="pb-12">
          <h2 className="text-xl font-semibold text-my-color-1 pb-8">
            Social.
          </h2>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline relative group"
                >
                  {link.label}
                  <span className="absolute left-0 top-1/2 w-0 h-[2px] bg-black transform -translate-y-1/2 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </Link>
                {index < socialLinks.length - 1 && (
                  <span className="text-jet-black">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-my-color-1 pb-8">Email.</h2>
          <p className="text-justify pb-8 block underline relative group">
            <Link href="mailto:prasenjitpriyan@gmail.com?subject=Hello&body=Hi Prasenjit,">
              prasenjitpriyan@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutContact
