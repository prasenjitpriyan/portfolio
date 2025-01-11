import Image from 'next/image'
import React from 'react'

const HeroRightSection: React.FC = () => {
  return (
    <div className="flex-1 flex justify-center z-20 h-72 md:h-full">
      <Image
        width={600}
        height={600}
        src="/x.svg"
        alt="Prasenjit Das"
        priority={true}
        className="rounded-lg max-w-full"
      />
    </div>
  )
}

export default HeroRightSection
