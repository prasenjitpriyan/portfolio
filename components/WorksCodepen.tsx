'use client';

import { Pen } from '@/lib/codepen';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { IoLogoCodepen } from 'react-icons/io';

interface WorksCodepenProps {
  pens: Pen[];
}

const WorksCodepen: React.FC<WorksCodepenProps> = ({ pens }) => {
  const [visibleCount, setVisibleCount] = React.useState(10);

  const showMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <section className="min-h-screen px-6 py-12 md:px-20 text-jet-black bg-ghost-white">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center pb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          Creative Coding
        </motion.h1>
        <motion.p
          className="text-lg text-jet-black text-center pb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}>
          Apart from full-stack applications, I love exploring creative coding
          on{' '}
          <span>
            <Link
              className="underline text-yellow-400 hover:text-yellow-300"
              href={'https://codepen.io/'}>
              CodePen
            </Link>
          </span>
          . Here are some of my experiments with CSS, Canvas, and interactions.
        </motion.p>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full space-y-6 md:space-y-0">
          {/* Pens List */}
          <div className="w-full md:w-2/3 space-y-6">
            {pens && pens.length > 0 ? (
              pens.slice(0, visibleCount).map((pen, index) => (
                <motion.div
                  className="flex items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out font-thin"
                  key={pen.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}>
                  <p className="text-xl mr-4 md:mr-8 text-jet-black">
                    -/ {String(index + 1).padStart(2, '0')}
                  </p>
                  <div className="flex-grow">
                    <p className="text-xl text-jet-black truncate font-semibold">
                      <Link
                        href={pen.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-600 transition-colors capitalize">
                        {pen.title}
                      </Link>
                    </p>
                    {pen.description && (
                      <p className="text-sm text-gray-600 truncate">
                        {pen.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-xl">No pens found.</p>
            )}
          </div>
          {/* CodePen Icon */}
          <motion.div
            className="flex justify-center items-center w-1/3 mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1, rotateY: 10, rotateX: 10 }}
            whileTap={{ scale: 0.9, rotateY: -10, rotateX: -10 }}>
            <IoLogoCodepen className="w-40 h-40 text-jet-black hover:text-yellow-400 transition duration-300 ease-in-out drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Load More Button - Centered below both columns */}
        {pens && visibleCount < pens.length && (
          <div className="flex justify-center pt-8 w-full">
            <button
              onClick={showMore}
              className="px-6 py-2 bg-jet-black text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:text-jet-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorksCodepen;
