'use client'

import { motion } from 'framer-motion'

type MotionDivProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  animationType?: 'fadeInUp' | 'fadeInScale' | 'fadeIn'
}

const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  className,
  delay = 0,
  animationType = 'fadeInUp'
}) => {
  const variants = {
    fadeInUp: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 }
    },
    fadeInScale: {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 }
    },
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 }
    }
  }

  return (
    <motion.div
      initial={variants[animationType].initial}
      whileInView={variants[animationType].whileInView}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default MotionDiv
