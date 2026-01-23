'use client';

import { Projects } from '@/types/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';
import Button from './Button';

interface SlugAboutProps {
  project: Projects;
}

const SlugAbout: React.FC<SlugAboutProps> = ({ project }) => {
  return (
    <section className="min-h-screen bg-ghost-white py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row gap-16 items-center">
        {/* Left Column: Content */}
        <motion.div
          className="flex-1 space-y-8 z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          {/* Header */}
          <div>
            <motion.span
              className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}>
              Overview
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-jet-black mb-6">
              About the Project
            </h2>
            <div className="w-20 h-1 bg-jet-black mb-8"></div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            {project.about}
          </p>

          <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-gray-200">
            <div>
              <h3 className="font-bold text-jet-black mb-1">Platform</h3>
              <p className="text-gray-600">{project.platform}</p>
            </div>
            <div>
              <h3 className="font-bold text-jet-black mb-1">Category</h3>
              <p className="text-gray-600">{project.category}</p>
            </div>
            <div className="col-span-2">
              <h3 className="font-bold text-jet-black mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-6 md:gap-24 pt-4">
            {project.liveUrl && (
              <Button
                text="VISIT SITE"
                href={project.liveUrl}
                icon={<GoArrowRight className="text-xl" />}
                className="relative text-jet-black inline-flex items-center"
              />
            )}
            {project.repoUrl && (
              <Button
                text="SOURCE CODE"
                href={project.repoUrl}
                icon={<FaGithub className="text-xl" />}
                className="relative text-jet-black inline-flex items-center"
              />
            )}
          </div>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div
          className="flex-1 relative w-full aspect-video md:aspect-auto md:h-[600px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src={project.image}
              alt="Project Showcase"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-jet-black/10 mix-blend-overlay"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-gray-200 rounded-2xl md:rotate-6"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default SlugAbout;
