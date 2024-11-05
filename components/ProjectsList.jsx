import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsList = ({ projects }) => (
  <div className="space-y-8">
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>
)

export default ProjectsList
