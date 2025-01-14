import React from 'react'
import Marquee from 'react-fast-marquee'

const AboutMarquee: React.FC = () => {
  const keywords = [
    // Front-End Development
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue.js',
    'Angular',
    'Next.js',
    'Tailwind CSS',
    'Bootstrap',
    'SASS',
    'Less',
    'GraphQL',
    'Webpack',
    'Babel',
    'ES6+',
    'Responsive Design',
    'UI Components',
    'Material UI',
    'Ant Design',
    'React Native',
    'CSS Grid',
    'Flexbox',
    'AJAX',
    'DOM Manipulation',
    'CSS Animations',
    'Web Accessibility',
    'Progressive Web Apps (PWA)',

    // Back-End Development
    'Node.js',
    'Express',
    'MongoDB',
    'REST API',
    'OAuth',
    'JWT',
    'Serverless',
    'Firebase',

    // UI/UX Design
    'Wireframing',
    'Prototyping',
    'Figma',
    'Adobe XD',
    'Sketch',
    'InVision',
    'User Research',
    'Usability Testing',
    'User Flows',
    'Persona Creation',
    'UI Design',
    'UX Design',
    'Interaction Design',
    'Responsive Design',
    'Mobile First Design',
    'Information Architecture',
    'Design Systems',
    'Typography',
    'Color Theory',
    'Iconography',
    'Design Thinking',
    'A/B Testing',
    'User-Centered Design',
    'Usability Heuristics',
    'Journey Mapping',
    'Wireframe Sketches',
    'Click-through Prototypes',
    'High-Fidelity Design',
    'Low-Fidelity Design',
    'UX/UI Strategy',
    'Accessibility Design',
    'Responsive Prototyping',
    'UI Guidelines'
  ]

  return (
    <div className="h-[40svh] bg-black text-white flex flex-col items-center justify-center gap-16 py-8">
      {/* Marquee component to display keywords continuously */}
      <Marquee
        pauseOnHover
        direction="right"
        loop={0}
        speed={100}
        className="overflow-hidden"
      >
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="px-12 text-4xl"
            style={{
              color: '#000',
              fontStyle: 'italic',
              textShadow:
                '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff'
            }}
          >
            {keyword.toUpperCase()}
          </span>
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        direction="left"
        loop={0}
        speed={100}
        className="overflow-hidden"
      >
        {/* Render each keyword inside the marquee with capitalization */}
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="px-12 text-4xl"
            style={{
              color: '#000',
              fontStyle: 'italic',
              textShadow:
                '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff'
            }}
          >
            {keyword.toUpperCase()}
          </span>
        ))}
      </Marquee>
    </div>
  )
}

export default AboutMarquee
