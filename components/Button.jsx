// Button.js
import React from 'react'
import Link from 'next/link'

const Button = ({ href, text, className }) => {
  return (
    <button>
      <Link href={href} className={className}>
        {text}
      </Link>
    </button>
  )
}

export default Button
