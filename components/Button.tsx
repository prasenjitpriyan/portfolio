'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

interface ButtonProps {
  text: string
  icon?: React.ReactNode
  href: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ text, icon, href, className }) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null)
  const circleRef = useRef<HTMLDivElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const linkNode = linkRef.current

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    if (linkNode) {
      linkNode.addEventListener('mouseenter', handleMouseEnter)
      linkNode.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (linkNode) {
        linkNode.removeEventListener('mouseenter', handleMouseEnter)
        linkNode.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Use isHovered to trigger hover effect on the circle
  useEffect(() => {
    if (circleRef.current) {
      if (isHovered) {
        circleRef.current.style.transform = 'scale(1.1)'
        circleRef.current.style.width = '170px'
      } else {
        circleRef.current.style.transform = 'scale(1)'
        circleRef.current.style.width = '48px'
      }
    }
  }, [isHovered])

  return (
    <div className="relative group">
      {/* Link */}
      <Link
        href={href}
        ref={linkRef}
        className={`relative inline-flex items-center text-black text-[15px] font-bold tracking-[0.5px] font-circular transition-all duration-300 group ${className}`}
      >
        <span className="link-text z-[2]">{text}</span>

        {/* Optional Icon */}
        {icon && <span className="relative ml-2 text-7xl z-[2]">{icon}</span>}
      </Link>

      {/* Decorative Circle */}
      <div
        ref={circleRef}
        className="absolute left-[-10px] top-0 bottom-0 m-auto w-12 h-12 bg-gray-200 rounded-full transition-all duration-300 z-[1]"
      ></div>
    </div>
  )
}

export default Button
