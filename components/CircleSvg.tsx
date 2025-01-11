import React from 'react'

interface CircleSvgProps {
  className?: string
}

const CircleSvg: React.FC<CircleSvgProps> = ({ className }) => {
  return (
    <div
      className={`absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center ${className}`}
    >
      <svg
        width="500"
        height="500"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-white rounded-full"
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="jet-black"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

export default CircleSvg
