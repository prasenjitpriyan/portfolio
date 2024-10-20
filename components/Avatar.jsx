import Image from 'next/image'
import React from 'react'
import myImage from '@/assets/images/myIMG.jpg'

const Avatar = () => {
  return (
    <div class="relative flex justify-center items-center w-[300px] h-[300px] bg-my-color-1 rounded-full">
      <Image
        src={myImage}
        width={500}
        height={500}
        alt="My Image"
        className="border-2 border-my-color-3 max-w-full max-h-full rounded-full scale-[0.87] transition-transform duration-300 ease-[cubic-bezier(0.4,1.55,0.74,0.55)] hover:scale-[1.11]"
      />
    </div>
  )
}

export default Avatar
