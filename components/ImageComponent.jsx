import React from 'react'
import Image from 'next/image'

const ImageComponent = ({ src, alt }) => {
  return (
    <Image
      width={500}
      height={500}
      src={src}
      alt={alt}
      className="w-full max-w-md rounded-lg shadow-lg hover:border-2 hover:border-my-color-5"
    />
  )
}

export default ImageComponent
