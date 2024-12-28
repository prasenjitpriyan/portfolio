import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa'
import Link from 'next/link'
import MotionWrapper from '@/components/MotionWrapper'

const SocialLinks = () => {
  const socialLinks = [
    { href: '#', icon: <FaTwitter /> },
    { href: '#', icon: <FaFacebookF /> },
    { href: '#', icon: <FaInstagram /> },
    { href: '#', icon: <FaLinkedinIn /> },
    { href: '#', icon: <FaGithub /> }
  ]

  return (
    <div className="flex space-x-4 mb-8">
      {socialLinks.map((link, index) => (
        <MotionWrapper
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
          whileHover={{
            rotate: 360, // Adds circular rotation
            scale: 1.2 // Slightly enlarges the icon on hover
          }}
        >
          <div className="bg-my-color-2 p-2 rounded-full">
            <Link
              href={link.href}
              className="text-my-color-4 hover:text-my-color-3 text-xl"
            >
              {link.icon}
            </Link>
          </div>
        </MotionWrapper>
      ))}
    </div>
  )
}

export default SocialLinks
