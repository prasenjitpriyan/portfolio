'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import Header from './Header';

const WorksSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section
      id="hero-section"
      className="relative h-screen overflow-hidden bg-white text-jet-black flex flex-col">
      {/* Header */}
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="hidden md:block fixed left-8 top-[50%] rotate-[270deg] w-8 h-8">
        <p className="text-xs">WORKS</p>
      </div>
      <div className="flex justify-center items-center border-2 h-screen relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}>
          <Image
            src={'/work.png'}
            alt="work"
            width={500}
            height={500}
            className="px-12 md:px-0 opacity-80 md:h-[500px] md:w-[500px]"
            priority
          />
        </motion.div>

        <motion.h1
          className="absolute text-6xl md:text-7xl text-black font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
          MY WORKS
        </motion.h1>
        {/* Animated Arrow */}
        <div className="absolute bottom-8 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-jet-black animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
