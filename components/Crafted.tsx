import React from 'react';
import MotionDiv from './MotionDiv';

const Crafted: React.FC = () => {
  return (
    <section className="h-[50svh] relative px-20 py-28 overflow-hidden">
      {/* Heading */}
      <MotionDiv
        className="relative text-3xl md:text-5xl font-semibold inline-block text-jet-black"
        animationType="fadeInUp"
      >
        Crafted with love
      </MotionDiv>
      <br />

      {/* Paragraph */}
      <MotionDiv
        className="text-jet-black text-lg font-playwrite"
        animationType="fadeInUp"
        delay={0.2}
      >
        These are a selection of my recent works.
      </MotionDiv>
    </section>
  );
};

export default Crafted;
