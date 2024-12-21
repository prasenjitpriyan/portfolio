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
        <div className="bg-my-color-2 p-2 rounded-full">
          <Link
            href="#"
            className="text-my-color-4 hover:text-my-color-3 text-xl"
          >
            <FaTwitter />
          </Link>
        </div>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
      >
        <div className="bg-my-color-2 p-2 rounded-full">
          <Link
            href="#"
            className="text-my-color-4 hover:text-my-color-3 text-xl"
          >
            <FaFacebookF />
          </Link>
        </div>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="bg-my-color-2 p-2 rounded-full">
          <Link
            href="#"
            className="text-my-color-4 hover:text-my-color-3 text-xl"
          >
            <FaInstagram />
          </Link>
        </div>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
      >
        <div className="bg-my-color-2 p-2 rounded-full">
          <Link
            href="#"
            className="text-my-color-4 hover:text-my-color-3 text-xl"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
      >
        <div className="bg-my-color-2 p-2 rounded-full">
          <Link
            href="#"
            className="text-my-color-4 hover:text-my-color-3 text-xl"
          >
            <FaGithub />
          </Link>
        </div>
      </MotionWrapper>
    </div>
  )
}

export default SocialLinks
