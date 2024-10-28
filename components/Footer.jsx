import Image from 'next/image'
import Link from 'next/link'
import socialMediaLinks from '@/lib/SocialMediaILinks'
import MotionDiv from './MotionDiv'

const Footer = () => {
  return (
    <footer className="bg-my-color-2 text-my-color-4">
      <div className="max-w-8xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <MotionDiv
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="flex items-center mb-4 md:mb-0"
        >
          <Image
            src={'/pd.png'}
            priority
            width={500}
            height={500}
            alt="Logo"
            className="h-10 w-10"
          />
        </MotionDiv>
        <div className="flex space-x-6">
          {socialMediaLinks.map(({ href, target, className, icon }, index) => (
            <MotionDiv
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={href}
                target={target}
                className={className}
                rel="noopener noreferrer"
              >
                {icon}
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
      <div className="bg-my-color-2 text-my-color-4 py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Prasenjit Das. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
