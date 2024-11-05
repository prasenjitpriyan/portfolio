import React from 'react'
import SkillBadge from './SkillBadge'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiVuedotjs,
  SiGithub,
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiWebpack,
  SiBabel,
  SiJest,
  SiCypress,
  SiExpress,
  SiMongodb,
  SiNextdotjs
} from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React.js', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Angular.js', icon: <SiAngular /> },
  { name: 'Vue.js', icon: <SiVuedotjs /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Webpack', icon: <SiWebpack /> },
  { name: 'Babel', icon: <SiBabel /> },
  { name: 'Jest', icon: <SiJest /> },
  { name: 'Cypress', icon: <SiCypress /> },
  { name: 'Github', icon: <SiGithub /> }
]

const SkillsSection = () => (
  <div>
    <h2 className="text-2xl font-semibold text-my-color-5 mb-4">Skills:</h2>
    <ul className="list-disc list-inside text-my-color-4 mb-6">
      <li>HTML</li>
      <li>CSS, Bootstrap, Tailwind CSS</li>
      <li>JavaScript (ES6+)</li>
      <li>TypeScript</li>
      <li>Frameworks/Libraries: React, Node.js, Angular, Vue.js, Next.js</li>
      <li>Tools: Git, Webpack, Babel</li>
      <li>Testing: Jest, Cypress</li>
      <li>Design: Responsive Design, UX/UI Principles</li>
    </ul>

    <div className="flex flex-wrap justify-center space-x-4">
      {skills.map((skill, index) => (
        <SkillBadge key={index} icon={skill.icon} />
      ))}
    </div>
  </div>
)

export default SkillsSection
