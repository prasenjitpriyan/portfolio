import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href="/home">
      <Image
        width={50}
        height={50}
        src="/pd-logo-black-and-white.png"
        alt="Prasenjit Das"
        className="rounded-lg max-w-full cursor-pointer"
      />
    </Link>
  )
}

export default Logo
