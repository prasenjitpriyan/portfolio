import Image from 'next/image'
import React from 'react'

const HeroRightSection: React.FC = () => {
  return (
    <div className="flex-1 flex justify-center items-center relative z-20 h-96 md:h-full">
      {/* First Image */}
      <Image
        width={600}
        height={600}
        src="/x.svg"
        alt="Prasenjit Das"
        priority={true}
        className="w-full h-full object-cover"
      />

      {/* Second Image on top, centered with bounce effect */}
      <Image
        width={200}
        height={200}
        src="/my.jpg"
        alt="Additional Image"
        priority={true}
        className="absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 w-[150px] h-[150px] md:w-[300px] md:h-[300px] animate-bounce-in-place"
      />
    </div>
  )
}

export default HeroRightSection
