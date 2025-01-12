import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-20 right-0 rotate-[90deg]">
      <div className="hidden sm:block">
        <p className="flex justify-center items-center">
          <span className="text-gray-500 tracking-widest">SCROLL DOWN</span>
          <IoIosArrowRoundDown className="rotate-[270deg] text-gray-500 text-3xl" />
        </p>
      </div>
    </div>
  )
}

export default ScrollIndicator
