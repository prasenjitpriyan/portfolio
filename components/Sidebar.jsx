import Image from 'next/image'
import SocialLinks from './SocialLinks'
import NavLinks from './NavLinks'
import MotionWrapper from '@/components/MotionWrapper' // Import MotionWrapper

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed left-0 top-0 bottom-0 w-64 p-6 bg-my-color-1 text-my-color-4 z-50 shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 xl:translate-x-0 h-screen`}
    >
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <MotionWrapper
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image
            src="/myIMG.jpg"
            width={80}
            height={80}
            alt="Prasenjit Das"
            className="rounded-full mb-4 border-2 border-my-color-3"
          />
        </MotionWrapper>

        {/* Name */}
        <MotionWrapper
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <h1 className="text-lg text-my-color-3 font-bold mb-6">
            Prasenjit Das
          </h1>
        </MotionWrapper>

        {/* Social Media Icons */}
        <SocialLinks />

        {/* Navigation Links */}
        <NavLinks />
      </div>
    </div>
  )
}

export default Sidebar
