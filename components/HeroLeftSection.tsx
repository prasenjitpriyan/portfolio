import React from 'react'
import Link from 'next/link'

const HeroLeftSection: React.FC = () => {
  return (
    <div className="flex-1 space-y-6 z-10 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-semibold">
        From Delivering Postal Services to Delivering Code
      </h1>
      <p className="text-lg">
        Hi, I&apos;m <span className="font-bold">Prasenjit Das</span>, a
        passionate Front-end Developer, based in India.
      </p>

      <Link href="/works">
        <button className="mt-4 px-6 py-3 bg-jet-black text-ghost-white font-medium rounded hover:bg-pearl-white">
          See My Works
        </button>
      </Link>
    </div>
  )
}

export default HeroLeftSection
