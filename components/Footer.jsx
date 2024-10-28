// components/Footer.js

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-my-color-4 text-white">
      <div className="max-w-8xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src={'/pd.png'}
            priority
            width={500}
            height={500}
            alt="Logo"
            className="h-10 w-10"
          />
        </div>
        <div className="flex space-x-6">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="hover:text-my-color-6 transition duration-300"
          >
            <FaFacebook className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            className="hover:text-my-color-6 transition duration-300"
          >
            <FaTwitter className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="hover:text-my-color-6 transition duration-300"
          >
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="hover:text-my-color-6 transition duration-300"
          >
            <FaLinkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="bg-my-color-4 py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Prasenjit Das. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
