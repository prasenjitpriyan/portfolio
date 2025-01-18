import Image from 'next/image'
import React from 'react'

const HeroRightSection: React.FC = () => {
  return (
    <div className="flex-1 flex justify-center items-center relative z-20 h-96 md:h-full">
      {/* First Image with circulating animation */}
      <div className="w-full h-full animate-rotate-once">
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
        width={200}
        height={200}
        src="/3.png"
        alt="Additional Image"
        priority={true}
        className="absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] animate-bounce-in-place"
      />
    </div>
  )
}

export default HeroRightSection
