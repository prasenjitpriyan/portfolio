import React from 'react'
import Link from 'next/link'

const HeroSocialLinks: React.FC = () => {
  return (
    <div className="hidden md:flex gap-4 justify-center">
      <Link
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-ghost-white"
      >
        GitHub
      </Link>
      <span className="text-jet-black">/</span>
      <Link
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-ghost-white"
      >
        LinkedIn
      </Link>
      <span className="text-jet-black">/</span>
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-ghost-white"
      >
        Facebook
      </Link>
    </div>
  )
}

export default HeroSocialLinks
