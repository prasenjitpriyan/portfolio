import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'

const SkillsPage = () => {
  const projects = [
    {
      title: 'Core Front-End Development',
      description:
        'Proficient in JavaScript and TypeScript, Skilled in React.js and Next.js frameworks for building scalable web apps, Expertise in styling with Tailwind CSS and creating responsive UIs and Experienced in crafting smooth animations and transitions using GSAP and Framer Motion',
      link: '/'
    },
    {
      title: 'Web Development Fundamentals',
      description:
        'Strong understanding of HTML5 and CSS3 standards, Knowledge of accessibility principles (WCAG) for inclusive design, Experienced in SEO best practices to optimize website performance',
      link: '/introduction'
    },
    {
      title: 'Back-End Integration',
      description:
        'Working knowledge of Node.js and Express.js, Experience with MongoDB for managing databases, Skilled in REST API integration for dynamic web solutions',
      link: '/skills'
    },
    {
      title: 'Project Management and Deployment',
      description:
        'Proficient in Git and GitHub for version control, Experience deploying projects using Vercel and Netlify, Adept at managing small-scale projects with JSON Server for mock backend',
      link: '/projects'
    },
    {
      title: 'Motion and Interactive Experiences',
      description:
        'Creating immersive animations using GSAP for scroll-based and timeline-driven interactions, Leveraging Framer Motion to build fluid, interactive components in React.js, Focused on crafting visually appealing transitions to improve user experience',
      link: '/achievements'
    },
    {
      title: 'Continuous Learning and Exploration',
      description:
        'Exploring advanced motion techniques for building engaging web interfaces, Learning Angular and Vue.js to broaden my front-end expertise, Eager to stay updated with the latest JavaScript and React.js features.',
      link: '/contact'
    }
  ]

  return (
    <section className="min-h-[calc(100vh-2rem)] bg-my-color-1 m-4 p-4 rounded-md">
      <BackgroundBeamsWithCollision>
        <div className="w-full">
          <div className="">
            <h1 className="text-4xl font-bold text-my-color-3 text-center">
              Skills and Expertise
            </h1>
            <HoverEffect items={projects} />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  )
}

export default SkillsPage
