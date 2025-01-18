import React from 'react'
import Button from './Button'
import { GoArrowRight } from 'react-icons/go'

const MoreProjects = () => {
  return (
    <section className="h-[50svh] relative px-20 py-28 overflow-hidden">
      {/* Heading */}
      <div className="overflow-hidden">
        <p className="revealer relative text-xs inline-block text-jet-black">
          THERE&apos;S MORE
        </p>
      </div>
      <br />

      {/* Paragraph */}
      <div className="flex">
        <Button
          text="View all projects"
          href="/works"
          icon={<GoArrowRight className="text-4xl" />}
          className="text-black text-3xl"
          circleColor="bg-gray-200"
          hoverWidth="300px"
        />
      </div>
    </section>
  )
}

export default MoreProjects
