import Link from 'next/link'
import React from 'react'

const MoreProjects = () => {
  return (
    <section className="h-[50svh] relative px-20 py-28 overflow-hidden">
      {/* Heading */}
      <div className="overflow-hidden">
        <p className="revealer relative text-3xl md:text-5xl font-semibold inline-block text-jet-black">
          There is More
        </p>
      </div>
      <br />

      {/* Paragraph */}
      <div className="overflow-hidden">
        <button className="bg-jet-black text-white py-2 px-4 rounded border-none hover:bg-ghost-white hover:text-jet-black">
          <Link href={'/works'}>View all projects</Link>
        </button>
      </div>
    </section>
  )
}

export default MoreProjects
