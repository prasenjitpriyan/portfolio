import React from 'react'
import MotionDiv from './MotionDiv'

const SkillBadge = ({ icon, bgColor }) => (
  <MotionDiv
    className="relative flex items-center justify-center"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
  >
    {/* Decorative Background */}
    <div
      className={`absolute -inset-1 rounded-full opacity-90 blur-lg ${bgColor}`}
    ></div>

    {/* Skill Badge with Motion */}
    <MotionDiv
      className="
        relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 
        rounded-full flex items-center justify-center bg-my-color-4
        text-my-color-2 text-3xl shadow-md 
        transition-transform duration-200 ease-in-out"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      {icon}
    </MotionDiv>
  </MotionDiv>
)

export default SkillBadge
