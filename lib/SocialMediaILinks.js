import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaDribbble
} from 'react-icons/fa'

const socialMediaLinks = [
  {
    href: 'https://github.com/yourusername',
    target: '_blank',
    className: 'hover:text-my-color-6 transition duration-300',
    icon: <FaGithub className="text-xl" />
  },
  {
    href: 'https://linkedin.com/in/yourusername',
    target: '_blank',
    className: 'hover:text-my-color-6 transition duration-300',
    icon: <FaLinkedin className="text-xl" />
  },
  {
    href: 'https://facebook.com/yourusername',
    target: '_blank',
    className: 'hover:text-my-color-6 transition duration-300',
    icon: <FaFacebook className="text-xl" />
  },
  {
    href: 'https://twitter.com/yourusername',
    target: '_blank',
    className: 'hover:text-my-color-6 transition duration-300',
    icon: <FaTwitter className="text-xl" />
  },
  {
    href: 'https://dribbble.com/yourusername',
    target: '_blank',
    className: 'hover:text-my-color-6 transition duration-300',
    icon: <FaDribbble className="text-xl" />
  }
]

export default socialMediaLinks
