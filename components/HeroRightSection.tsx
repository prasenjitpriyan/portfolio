import Image from 'next/image'
import React from 'react'

const HeroRightSection: React.FC = () => {
  return (
    <div className="flex-1 relative h-96 md:h-full">
      {/* First Image with circulating animation */}
      <div className="absolute top-1/2 left-1/2 animate-rotate-once flex justify-center items-center w-62.5 h-62.5 md:w-155 md:h-155">
        <Image
          width={420}
          height={420}
          src="/x.svg"
          alt="Prasenjit Das"
          priority={true}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Second Image on top, centered with bounce effect */}
      <div className="absolute top-1/2 left-1/2 animate-bounce-in-place pointer-events-none flex justify-center items-center w-50 h-50 md:w-100 md:h-100">
        <Image
          width={400}
          height={400}
          src="/3.png"
          alt="Additional Image"
          priority={true}
          className="w-full h-full rounded-full object-cover pointer-events-auto"
        />
      </div>
    </div>
  )
}

export default HeroRightSection
