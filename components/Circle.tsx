import React from 'react'

interface RoundProps {
  className?: string
}

const Circle: React.FC<RoundProps> = ({ className }) => {
  return (
    <svg
      id="circ"
      viewBox="0 0 187 187"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        className="fill-none stroke-white stroke-[1]"
        cx="93.5"
        cy="93.5"
        r="93"
      ></circle>
    </svg>
  )
}

export default Circle
