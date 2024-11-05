import React from 'react'

const SkillBadge = ({ icon }) => (
  <div
    className="w-16 h-16 bg-my-color-4 rounded-full flex items-center justify-center text-my-color-2 text-3xl mb-4 shadow-md 
               hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
  >
    {icon}
  </div>
)

export default SkillBadge
