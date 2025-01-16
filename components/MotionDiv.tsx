'use client'

import React from 'react'
import { motion, MotionProps } from 'framer-motion'

interface MotionDivProps extends MotionProps {
  children: React.ReactNode
  className?: string
}

const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  className,
  ...motionProps
}) => {
  return (
    <motion.div {...motionProps} className={className}>
      {children}
    </motion.div>
  )
}

export default MotionDiv
