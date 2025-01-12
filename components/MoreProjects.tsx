import React from 'react'

const MoreProjects = () => {
  return (
    <section className="h-[50svh] w-inherit relative px-20 py-32 overflow-hidden">
      {/* Heading */}
      <div className="overflow-hidden">
        <p className="revealer relative text-3xl md:text-5xl font-semibold inline-block opacity-100 transform translate-x-0 translate-y-0">
          There is More
        </p>
      </div>
      <br />

      {/* Paragraph */}
      <div className="overflow-hidden">
        <h2 className="opacity-100 transform translate-x-0 translate-y-0 text-lg">
          View all projects
        </h2>
      </div>
    </section>
  )
}

export default MoreProjects
