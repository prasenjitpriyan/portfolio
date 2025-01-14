import React from 'react'

const AboutSkill: React.FC = () => {
  const sections = [
    {
      title: 'Core Front-End Development',
      skills: [
        'Proficient in JavaScript and TypeScript.',
        'Skilled in React.js and Next.js for scalable web app development.',
        'Adept at using Tailwind CSS for responsive and modern UI designs.',
        'Experienced in implementing smooth animations with GSAP and Framer Motion.'
      ]
    },
    {
      title: 'Web Development Fundamentals',
      skills: [
        'Strong grasp of HTML5 and CSS3 standards.',
        'Knowledge of WCAG accessibility principles for inclusive design.',
        'Familiarity with SEO best practices to optimize website performance.'
      ]
    },
    {
      title: 'Back-End Integration',
      skills: [
        'Basic understanding of Node.js and Express.js.',
        'Experience managing databases with MongoDB.',
        'Skilled in integrating REST APIs for dynamic web solutions.'
      ]
    },
    {
      title: 'Project Management and Deployment',
      skills: [
        'Proficient with Git and GitHub for version control.',
        'Experienced in deploying projects using platforms like Vercel and Netlify.',
        'Familiar with using JSON Server for mock backends in small projects.'
      ]
    }
  ]

  return (
    <section className="min-h-screen w-full overflow-hidden bg-ghost-white text-jet-black flex flex-wrap px-20 py-20">
      {/* Left Grid */}
      <div className="w-full h-1/6 md:w-1/3 p-4 md:h-full">
        <div className="flex gap-12">
          <p className="font-thin">/ 01 -</p>
          <p className="font-thin">SKILLS</p>
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
                {section.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSkill
