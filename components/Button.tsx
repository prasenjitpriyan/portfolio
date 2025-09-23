'use client';

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  href: string;
  className?: string;
  circleColor?: string;
  hoverWidth?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  href,
  className,
  circleColor = 'bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100',
  hoverWidth = '170px',
}) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const circleAnimation = useAnimation();

  useEffect(() => {
    const linkNode = linkRef.current;

    const handleMouseEnter = () => {
      circleAnimation.start({
        scale: 1.2,
        width: hoverWidth,
        transition: { duration: 0.1, ease: 'easeInOut' },
      });
    };

    const handleMouseLeave = () => {
      circleAnimation.start({
        scale: 1,
        width: '48px',
        transition: { duration: 0.1, ease: 'easeInOut' },
      });
    };

    if (linkNode) {
      linkNode.addEventListener('mouseenter', handleMouseEnter);
      linkNode.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (linkNode) {
        linkNode.removeEventListener('mouseenter', handleMouseEnter);
        linkNode.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [circleAnimation, hoverWidth]);

  return (
    <div className="relative group">
      {/* Link */}
      <Link
        href={href}
        ref={linkRef}
        className={`relative inline-flex items-center font-bold tracking-[0.5px] font-circular transition-all duration-300 z-[2] ${className}`}
      >
        <span className="z-[3]">{text}</span>

        {/* Optional Icon */}
        {icon && <span className="relative ml-2 text-xl z-[3]">{icon}</span>}
      </Link>

      {/* Decorative Circle */}
      <motion.div
        animate={circleAnimation}
        initial={{ scale: 1, width: '48px', height: '48px' }}
        className={`absolute left-[-10px] top-0 bottom-0 m-auto rounded-full z-[1] transition-all duration-300 ${circleColor}`}
      />
    </div>
  );
};

export default Button;
