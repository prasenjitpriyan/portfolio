'use client';

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  circleColor?: string;
  hoverWidth?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  href,
  className,
  circleColor = 'bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100',
  hoverWidth = '170px',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const circleAnimation = useAnimation();

  useEffect(() => {
    const node = href ? linkRef.current : buttonRef.current;

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

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [circleAnimation, hoverWidth, href]);

  const content = (
    <>
      <span className="z-[3]">{text}</span>
      {/* Optional Icon */}
      {icon && (
        <span className="relative ml-2 text-lg md:text-xl z-[3]">{icon}</span>
      )}
    </>
  );

  const commonClasses = `relative inline-flex items-center font-bold tracking-[0.5px] font-circular transition-all duration-300 z-[2] text-sm md:text-base ${className}`;

  if (href) {
    return (
      <div className="relative group">
        <Link href={href} ref={linkRef} className={commonClasses}>
          {content}
        </Link>
        {/* Decorative Circle */}
        <motion.div
          animate={circleAnimation}
          initial={{ scale: 1, width: '48px', height: '48px' }}
          className={`absolute left-[-10px] top-0 bottom-0 m-auto rounded-full z-[1] transition-all duration-300 scale-75 md:scale-100 ${circleColor}`}
        />
      </div>
    );
  }

  return (
    <div className="relative group">
      <button
        ref={buttonRef}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${commonClasses} disabled:opacity-50 disabled:cursor-not-allowed`}>
        {content}
      </button>
      {/* Decorative Circle */}
      <motion.div
        animate={circleAnimation}
        initial={{ scale: 1, width: '48px', height: '48px' }}
        className={`absolute left-[-10px] top-0 bottom-0 m-auto rounded-full z-[1] transition-all duration-300 scale-75 md:scale-100 ${circleColor}`}
      />
    </div>
  );
};

export default Button;
