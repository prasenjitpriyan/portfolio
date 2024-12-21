import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa'
import Link from 'next/link'

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mb-8">
      <Link href="#" className="text-my-color-4 hover:text-my-color-3 text-xl">
        <FaTwitter />
      </Link>
      <Link href="#" className="text-my-color-4 hover:text-my-color-3 text-xl">
        <FaFacebookF />
      </Link>
      <Link href="#" className="text-my-color-4 hover:text-my-color-3 text-xl">
        <FaInstagram />
      </Link>
      <Link href="#" className="text-my-color-4 hover:text-my-color-3 text-xl">
        <FaLinkedinIn />
      </Link>
      <Link href="#" className="text-my-color-4 hover:text-my-color-3 text-xl">
        <FaGithub />
      </Link>
    </div>
  )
}

export default SocialLinks
