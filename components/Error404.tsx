'use client';
import { motion } from 'framer-motion';
import React from 'react';

// Variants for the drawing animation of SVG paths
const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.05, type: 'spring', duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.05, duration: 0.01 },
    },
  }),
};

// Variants for the circles to create a "pop-in" effect
const circleVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: i * 0.05,
    },
  }),
};

const Error404: React.FC = () => {
  return (
    <motion.svg
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 683.63 482.05"
      className="w-full max-w-2xl mx-auto cursor-pointer">
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .cls-1,
              .cls-2 {
                fill: none;
                stroke-width: 2px;
              }
              .cls-1 {
                stroke: #231f20;
                stroke-linejoin: round;
              }
              .cls-2 {
                stroke: #1a1a1a;
                stroke-miterlimit: 10;
              }
            `,
          }}
        />
      </defs>
      <title>404-illustration</title>

      {/* NEW: Wrapper group for the continuous, subtle floating animation */}
      <motion.g
        animate={{
          y: [0, -4, 0],
          x: [0, 2, -2, 2, 0],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: Infinity,
        }}>
        {/* This group controls the initial staggered drawing animation for all its children */}
        <motion.g
          id="Layer_1-2"
          data-name="Layer 1-2"
          initial="hidden"
          animate="visible">
          {/* Each path and circle is given a custom index `i` for staggering the animation delay */}
          <motion.path
            className="cls-1"
            d="M31.43,266.57,376,67.62,614.58,205.36,270,404.3ZM141,360.44l129,74.47V404.3M31.43,266.57v30.61l88.13,50.88m432.8-74.62,63.87-36.53-1.65-31.55M391,365.69l137.52-78.63M270,434.91l98.86-56.53"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={0}></motion.path>
          <motion.path
            className="cls-1"
            d="M107.75,383.31c16.75-11.78,29.71,5.69,29.71,5.69s5.22-27.6,3.42-38.26-7.56-13.6-14.72-10.13c-10.61,5.13-18.41,42.7-18.41,42.7m307.6-4.08s-21.9-.62-26.78,22.89c0,0-21.45-18.85-21.65-30.63-.12-8,5-12,15.4-9.1s33,16.84,33,16.84Z"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={1}></motion.path>
          <motion.path
            className="cls-1"
            d="M401,398.87a21.2,21.2,0,0,1-12.4,3.25c4.88-23.52,26.78-22.89,26.78-22.89a46.14,46.14,0,0,1-5.59,11.22M111,437s-1.46-4.14,6.5-57.63M129,381.8s-4.88,16.89-4.87,53.11"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={2}></motion.path>
          <motion.path
            className="cls-1"
            d="M136.79,452.94c-.9-.32-1.84-.71-2.85-1.12,0,0,.9,4.28,2.23,8.95a48.67,48.67,0,0,0,3.48,9.35c3,5.48-3.94,6.71-5.72,2.79-.38-.81-1-2.26-1.68-4-2.69-6.59-6.28-13.34-6.28-13.34s.73,10.76,1.58,18c.18,1.49.32,2.63.42,3.27.6,3.68-5.94,5.67-6.63-.06s-2.93-17.9-2.93-17.9S114.88,474,114.62,478c-.24,3.66-6.89,4.69-5.94-.59s1-15.27,2.33-21.31c-.54.56-4.94,6.74-7.14,10.26s-6.17,1.12-4.26-3.17,4.64-10.32,5.27-15.66v-.15c1.32-11.38,14.76-17.17,23.62-9.91a23.41,23.41,0,0,1,2.89,2.83c4.13,3.78,11.1,9.53,14.86,9.54,5.34,0,6.8,9.17-9.46,3.11ZM520.05,114.61s-31.18,3.92-41.52,12.2c-1.09.87,33.43,18.82,33.43,18.82,6.48-.42,11.4-.95,11.4-.95s-16.38-14.3-3.3-30.07c0,0,1.83.86,2.48,8.89m50.31-.86s-3.55-2.36-57.5,1.32m1.5,11.69s17.23-3.53,53.35-.63"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={3}></motion.path>
          <motion.path
            className="cls-1"
            d="M587.15,149.1c-.25-.93-.56-1.89-.89-2.93,0,0,4.2,1.24,8.74,2.93a48.21,48.21,0,0,1,9,4.21c5.22,3.45,7-3.39,3.24-5.48-.78-.44-2.17-1.15-3.85-2-6.35-3.21-12.8-7.32-12.8-7.32s10.67,1.59,17.8,3c1.47.3,2.6.53,3.22.68,3.62.89,6.13-5.47.47-6.62s-17.61-4.35-17.61-4.35,15.39-2.31,19.35-2.25c3.67.06,5.22-6.49-.12-6s-15.3-.23-21.43.63c.6-.49,7.11-4.39,10.79-6.3s1.61-6.06-2.83-4.5-10.65,3.81-16,4h-.15c-11.45.41-18.29,13.35-11.76,22.76a23.26,23.26,0,0,0,2.59,3.1c3.44,4.42,8.62,11.82,8.33,15.57-.38,5.37,8.66,7.56,3.91-9.13Zm-110.36,279s-47.19-23.25-76.69-44.16m-8.56,9.66s65.58,36.72,79.07,44.51m53.46-24.5c1.45-11.88-6.08-19.84-15.76-12.8-.39.28-.77.59-1.16.93C496.41,411.08,492,457,498.5,457.86c4.25.6,21.43-4,23.18-18.58C522.77,430.23,522.83,423.7,524.07,413.59Z"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={4}></motion.path>
          <motion.path
            className="cls-1"
            d="M517.44,398.33s-23.14-2.48-29,21.14-11.28,19.32-17.39,14.22l-1.42,6.46s18.71,30.41,44.88,11.67"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={5}></motion.path>
          <motion.path
            className="cls-1"
            d="M486,428.08s-3,1.25-5-.55-6,2.88-9.83,6.15m46.27-35.35s-4.45.49-7.86,6c-5.68,9.15-11.5,23.93-6.8,53.55m25.76-170.82c-1.92-3.29-3.2-6.54-3.24-9.38-.12-8,5-12,15.4-9.1a71.53,71.53,0,0,1,11.66,4.85c10.24,5.09,21.38,12,21.38,12s-21.9-.62-26.78,22.89c0,0-12.36-10.86-18.41-21.25"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={6}></motion.path>
          <motion.path
            className="cls-1"
            d="M559.35,305.06a21.2,21.2,0,0,1-12.4,3.25c4.88-23.52,26.78-22.89,26.78-22.89a46.14,46.14,0,0,1-5.59,11.22m67,37.63S588,311,558.48,290.11m-8.56,9.66S615.5,336.49,629,344.28m53.46-24.5c1.45-11.88-6.08-19.84-15.76-12.8-.39.28-.77.59-1.16.93-10.74,9.37-15.12,55.24-8.66,56.15,4.25.6,21.43-4,23.18-18.58,1.1-9.05,1.16-15.59,2.4-25.7Z"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={7}></motion.path>
          <motion.path
            className="cls-1"
            d="M675.82,304.52s-23.14-2.48-29,21.14S635.58,345,629.47,339.88l-1.42,6.46s18.71,30.41,44.88,11.67"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={8}></motion.path>
          <motion.path
            className="cls-1"
            d="M644.34,334.27s-3,1.25-5-.55-6,2.88-9.83,6.15m46.31-35.35s-4.45.49-7.86,6c-5.68,9.15-11.5,23.93-6.8,53.55"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={9}></motion.path>

          {/* --- Circles start animating after the paths --- */}
          <motion.circle
            className="cls-1"
            cx="76.09"
            cy="264.78"
            r="8.83"
            variants={circleVariants}
            custom={10}></motion.circle>
          <motion.circle
            className="cls-1"
            cx="101.86"
            cy="250.05"
            r="8.83"
            variants={circleVariants}
            custom={10.5}></motion.circle>
          <motion.circle
            className="cls-1"
            cx="126.55"
            cy="235.96"
            r="8.83"
            variants={circleVariants}
            custom={11}></motion.circle>
          <motion.circle
            className="cls-1"
            cx="367.46"
            cy="93.05"
            r="8.83"
            variants={circleVariants}
            custom={11.5}></motion.circle>

          {/* --- Continue animating the remaining paths --- */}
          <motion.path
            className="cls-1"
            d="M134.45,218.35l15.47,8.78L355,109.74,337.69,99.4Zm46.36,62.2,75.39,1.28m-38.81-22.4L217,304M362.41,169.92l75.39,1.29M399,148.8l-.37,44.6m-89.4,111.12,129.23-77.39,23.32,12.63s17.93,8.66-6.23,26.07c-17.69,12.75-30.56,8.05-37.53,3.84-2.54-1.54-24.79-15.45-24.79-15.45m44.37-1.59-20-13M137.46,389s-2.8,2.77-10.5,2.64m396.39-247s1.5-3.59.85-10m-416.31,248s-.58,3,8.15,6.34M258.4,406.64v11.65l-33-18.91V387.53Z"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={12}></motion.path>
          <motion.path
            className="cls-2"
            d="M272.38,76.66l-5.48-5.48m-9.42-9.42,5.36,5.36m-5.36,9.54L263,71.18m9.42-9.42L267.13,67M15.25,100.32,9.9,95M.71,85.78,5.94,91M.71,100.32,6.06,95m9.19-9.19L10.13,90.9M204.89,23.71l-8.46-8.46M181.89.71,190.17,9m-8.28,14.72,8.45-8.46M204.89.71l-8.11,8.1M464.3,42l-8.46-8.46M441.3,19l8.28,8.28M441.3,42l8.46-8.46M464.3,19l-8.1,8.1M146,156.17l-8.46-8.46M123,133.17l8.28,8.28M123,156.17l8.46-8.46M146,133.17l-8.1,8.1"
            transform="translate(0 0)"
            variants={pathVariants}
            custom={13}></motion.path>
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};

export default Error404;
