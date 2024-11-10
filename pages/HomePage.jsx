import React from 'react'
import Link from 'next/link'
import MotionDiv from '@/components/MotionDiv'
import socialMediaLinks from '@/lib/SocialMediaILinks'
import HeroSection from '@/components/HeroSection'
import MotionWrapper from '@/components/MotionWrapper'

const HomePage = () => {
  return (
    <div className="min-h-[calc(100svh-4rem)] bg-my-color-2 text-my-color-4 relative">
      <MotionWrapper>
        <div className="absolute flex space-x-3 sm:space-x-0 sm:flex-col sm:space-y-3 bottom-4 right-4">
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
        {/* Hero Section */}
        <HeroSection />
      </MotionWrapper>
    </div>
  )
}

export default HomePage
