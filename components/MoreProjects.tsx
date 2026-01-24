'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import Button from './Button';
import CircularText from './CircularText';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1, delay },
  }),
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const MoreProjects = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[50svh] relative px-20 py-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="text-left">
        {/* Heading */}
        <motion.div
          className="overflow-hidden"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}>
          <p className="revealer relative text-xs inline-block text-jet-black uppercase">
            THERE&apos;S MORE
          </p>
        </motion.div>
        <br />

        {/* Button */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.3}>
          <Button
            text="View all projects"
            href="/works"
            icon={<GoArrowRight className="text-4xl" />}
            className="text-black text-3xl"
            circleColor="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100"
            hoverWidth="200px"
          />
        </motion.div>
      </div>

      {/* CircularText */}
      <div className="w-[200px] sm:w-[250px] md:w-[300px] aspect-square relative flex items-center">
        <CircularText
          text="PRASENJIT*PORTFOLIO*"
          onHover="speedUp"
          spinDuration={10}
          className="bg-jet-black"
        />
      </div>
    </section>
  );
};

export default MoreProjects;
