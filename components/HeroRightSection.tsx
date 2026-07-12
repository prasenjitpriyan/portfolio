import Image from 'next/image'
import React from 'react'

const HeroRightSection: React.FC = () => {
  return (
    <div className="flex-1 flex justify-center items-center relative z-20 h-96 md:h-full">
      {/* First Image with circulating animation */}
      <div className="w-full h-full animate-rotate-once z-0">
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
      <Image
        width={400}
        height={400}
        src="/3.png"
        alt="Additional Image"
        priority={true}
        className="absolute z-10 rounded-full top-1/2 left-1/2 w-50 h-50 md:w-100 md:h-100 animate-bounce-in-place"
      />
    </div>
  )
}

export default HeroRightSection
