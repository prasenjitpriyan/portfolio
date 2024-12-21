import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa'
import Link from 'next/link'
import MotionWrapper from '@/components/MotionWrapper' // Import MotionWrapper

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mb-8">
      <MotionWrapper
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Link
          href="#"
          className="text-my-color-4 hover:text-my-color-3 text-xl"
        >
          <FaTwitter />
        </Link>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
      >
        <Link
          href="#"
          className="text-my-color-4 hover:text-my-color-3 text-xl"
        >
          <FaFacebookF />
        </Link>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
      >
        <Link
          href="#"
          className="text-my-color-4 hover:text-my-color-3 text-xl"
        >
          <FaInstagram />
        </Link>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
      >
        <Link
          href="#"
          className="text-my-color-4 hover:text-my-color-3 text-xl"
        >
          <FaLinkedinIn />
        </Link>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
      >
        <Link
          href="#"
          className="text-my-color-4 hover:text-my-color-3 text-xl"
        >
          <FaGithub />
        </Link>
      </MotionWrapper>
    </div>
  )
}

export default SocialLinks
