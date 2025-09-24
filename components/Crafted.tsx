'use client';

import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const Crafted: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headingRef.current, paragraphRef.current], {
        opacity: 0,
        y: 50,
      });
      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      }).to(
        paragraphRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.6'
      );
      gsap.to(headingRef.current, {
        y: -5,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-[50svh] relative px-20 py-28 overflow-hidden"
    >
      <div
        ref={headingRef}
        className="relative text-3xl md:text-5xl font-semibold inline-block text-jet-black"
      >
        Crafted with love
      </div>
      <br />
      <div ref={paragraphRef} className="text-jet-black text-lg font-playwrite">
        These are a selection of my recent works.
      </div>
    </section>
  );
};

export default Crafted;
