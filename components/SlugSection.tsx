'use client';

import { Projects } from '@/types/projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import Header from './Header';

interface SlugSectionProps {
  project: Projects;
}

const SlugSection: React.FC<SlugSectionProps> = ({ project }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-jet-black text-ghost-white">
      {/* Navbar */}
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      {/* Hero Content */}
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Background Image with Parallax */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src={project.slug_hero_image}
            alt={project.title}
            fill
            priority
            className="object-cover opacity-60"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-jet-black/30 via-jet-black/10 to-jet-black/90" />
        </motion.div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-lg tracking-[0.2em] uppercase text-gray-300 mb-4">
            {project.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-2">
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'circOut' }}
            className="w-24 h-1 bg-white mt-6"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}>
          <p className="text-xs tracking-widest uppercase text-gray-400">
            Scroll
          </p>
          <motion.div
            className="w-[1px] h-12 bg-gray-400"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SlugSection;
