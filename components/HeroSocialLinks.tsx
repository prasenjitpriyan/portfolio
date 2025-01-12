import React from 'react'
import Link from 'next/link'

const HeroSocialLinks: React.FC = () => {
  const socialLinks = [
    { href: 'https://github.com', label: 'GitHub' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://facebook.com', label: 'Facebook' }
  ]

  return (
    <div className="hidden md:flex gap-4 justify-center">
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
  )
}

export default HeroSocialLinks
