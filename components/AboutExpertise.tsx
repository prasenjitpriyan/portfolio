import React from 'react'

const AboutExpertise: React.FC = () => {
  const sections = [
    {
      title: 'Motion and Interactive Experiences',
      points: [
        'Expertise in creating immersive scroll-based and timeline-driven animations using GSAP.',
        'Building fluid and interactive components with Framer Motion in React.js.',
        'Focused on designing visually engaging transitions to enhance user experience.'
      ]
    },
    {
      title: 'Continuous Learning and Exploration',
      points: [
        'Exploring advanced motion techniques to build captivating web interfaces.',
        'Learning Angular and Vue.js to expand front-end development skills.',
        'Staying updated with the latest JavaScript and React.js advancements.'
      ]
    }
  ]

  return (
    <section className="min-h-[50svh] w-full overflow-hidden bg-ghost-white text-jet-black flex flex-wrap px-20">
      {/* Left Grid */}
      <div className="w-full h-1/6 md:w-1/3 p-4 md:h-full">
        <div className="flex gap-12">
          <p className="font-thin">/ 03 -</p>
          <p className="font-thin">EXPERTISE</p>
        </div>
      </div>
      {/* Right Grid */}
      <div className="w-full h-5/6 md:w-2/3 p-4 md:h-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold text-my-color-1 mb-4">
                {section.title}
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutExpertise
