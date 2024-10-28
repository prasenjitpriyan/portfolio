'use client'

import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>
}

export default MotionDiv
