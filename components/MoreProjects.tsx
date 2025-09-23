'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import Button from './Button';
import MotionDiv from './MotionDiv';

const MoreProjects = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[50svh] relative px-20 py-20 overflow-hidden flex flex-col md:flex-row items-center justify-between"
    >
      {/* Left Content */}
      <div className="text-left">
        {/* Heading */}
        <MotionDiv className="overflow-hidden" animationType="fadeIn">
          <p className="revealer relative text-xs inline-block text-jet-black uppercase">
            THERE&apos;S MORE
          </p>
        </MotionDiv>
        <br />

        {/* Button */}
        <MotionDiv animationType="fadeInUp" delay={0.3}>
          <Button
            text="View all projects"
            href="/works"
            icon={<GoArrowRight className="text-4xl" />}
            className="text-black text-3xl"
            circleColor="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100"
            hoverWidth="300px"
          />
        </MotionDiv>
      </div>

      <MotionDiv
        className="w-[200px] sm:w-[250px] md:w-[300px] aspect-square relative flex items-center"
        animationType="fadeInScale"
        delay={0.5}
      >
        <motion.div
          animate={inView ? { rotate: [0, 360] } : { rotate: 0 }}
          transition={{
            duration: 20,
            repeat: inView ? Infinity : 0,
            ease: 'linear',
          }}
        >
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-80"
          >
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#111827" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="180" fill="url(#gradient1)" />
            <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="5" />
            <path
              d="M200 60 L250 340 M200 60 L150 340"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="5, 10"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="white"
              fontSize="20"
              fontWeight="bold"
              dy=".3em"
            >
              Explore Projects
            </text>
          </svg>
        </motion.div>
      </MotionDiv>
    </section>
  );
};

export default MoreProjects;
