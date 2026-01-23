'use client';

import { Projects } from '@/types/projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

interface SlugProjectsProps {
  project: Projects;
}

const SlugProjects: React.FC<SlugProjectsProps> = ({ project }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = React.useState(0);

  React.useEffect(() => {
    // Initial measurement
    const measure = () => {
      if (scrollRef.current) {
        // Use documentElement.clientWidth or window.innerWidth.
        // scrollWidth gives the width of the scrollable content including overflow.
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = window.innerWidth;

        // Ensure strictly positive range
        // If scrollWidth <= clientWidth, we don't need to scroll.
        const range = scrollWidth > clientWidth ? scrollWidth - clientWidth : 0;
        setScrollRange(range);
      }
    };

    measure();

    // Use ResizeObserver for robust layout tracking
    const observer = new ResizeObserver(() => {
      measure();
    });

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [project.project_images]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Map vertical scroll (0 to 1) to horizontal translation (0 to -scrollRange)
  const x = useTransform(scrollYProgress, [0, 1], ['0px', `-${scrollRange}px`]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-jet-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={scrollRef}
          style={{ x }}
          className="flex gap-10 pl-20 pr-20 items-center">
          {/* Title Card */}
          <div className="h-[400px] w-[300px] md:h-[600px] md:w-[400px] shrink-0 flex flex-col justify-center text-ghost-white">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Project <br />
              <span className="text-gray-500">Gallery</span>
            </h2>
            <div className="w-20 h-1 bg-white mt-8 mb-4" />
            <p className="text-gray-400">Scroll to explore visuals.</p>
          </div>

          {/* Images */}
          {project.project_images.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-[400px] w-[600px] md:h-[600px] md:w-[900px] shrink-0 rounded-2xl overflow-hidden bg-white/5"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <Image
                src={image}
                alt={`Project shot ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Footer CTA-like area inside gallery if needed */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-jet-black to-transparent" />
    </section>
  );
};

export default SlugProjects;
