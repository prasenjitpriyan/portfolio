import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { LuMouse } from 'react-icons/lu'

const ScrollIndicator: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="hidden sm:block text-sm capitalize">Scroll Down</p>

      {/* Show on larger screens */}
      <div className="hidden sm:block animate-bounce">
        <IoIosArrowRoundDown className="text-jet-black" />
      </div>

      {/* Show on small screens */}
      <div className="block sm:hidden animate-bounce">
        <LuMouse className="text-jet-black" />
      </div>
    </div>
  )
}

export default ScrollIndicator
