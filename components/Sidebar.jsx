'use client'

import Image from 'next/image'
import SocialLinks from './SocialLinks'
import NavLinks from './NavLinks'
import MotionWrapper from '@/components/MotionWrapper'
import { useSidebar } from '@/context/SidebarContext' // Import the custom hook
import Link from 'next/link'

const Sidebar = () => {
  const { isOpen } = useSidebar() // Consume state

  return (
    <div
      className={`fixed left-0 top-0 bottom-0 w-64 p-6 bg-my-color-1 text-my-color-4 z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 xl:translate-x-0 h-screen`}
    >
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="mb-4 bg-my-color-2 p-2 rounded-full border-8 border-my-color-3 shadow-lg">
          <MotionWrapper
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 100
            }}
            whileHover={{
              scale: 1.1, // Slight zoom effect
              rotate: 5, // Subtle rotation
              transition: { type: 'spring', stiffness: 150, damping: 10 }
            }}
          >
            <Link href={'/'}>
              <Image
                src="/myIMG.jpg"
                width={140}
                height={140}
                priority
                alt="Prasenjit Das"
                className="rounded-full"
              />
            </Link>
          </MotionWrapper>
        </div>

        {/* Name */}
        <MotionWrapper
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <h1 className="text-2xl text-my-color-3 font-bold mb-6">
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
