import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import Button from './Button';
import MotionDiv from './MotionDiv';

const HeroLeftSection: React.FC = () => {
  return (
    <MotionDiv
      className="flex-1 space-y-6 z-10 text-center md:text-left"
      animationType="fadeIn"
      delay={0}>
      <MotionDiv
        className="text-3xl md:text-5xl font-semibold"
        animationType="fadeInUp"
        delay={0.2}>
        From Delivering Postal Services to Delivering Code
      </MotionDiv>

      <MotionDiv
        className="text-lg font-playwrite"
        animationType="fadeInUp"
        delay={0.4}>
        Hi, I&apos;m <span className="font-bold">Prasenjit Das</span>, a
        passionate Front-end Developer, based in India.
      </MotionDiv>

      <MotionDiv
        className="flex justify-center md:justify-start"
        animationType="fadeInUp"
        delay={0.6}>
        <Button
          text="SEE MY WORKS"
          href="/works"
          icon={<GoArrowRight className="text-2xl" />}
          className="relative inline-flex items-center"
          hoverWidth="180px"
        />
      </MotionDiv>
    </MotionDiv>
  );
};

export default HeroLeftSection;
