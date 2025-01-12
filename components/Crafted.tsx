import React from 'react'

const Crafted: React.FC = () => {
  return (
    <section className="h-[50svh] relative px-20 py-28 overflow-hidden">
      {/* Heading */}
      <div className="overflow-hidden">
        <h2 className="revealer relative text-3xl md:text-5xl font-semibold inline-block text-jet-black">
          Crafted with love.
        </h2>
      </div>
      <br />

      {/* Paragraph */}
      <div className="overflow-hidden">
        <p className="text-jet-black text-lg">
          These are a selection of my recent works.
        </p>
      </div>
    </section>
  )
}

export default Crafted
