import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import Button from './Button';
import Circle from './Circle';
import MotionDiv from './MotionDiv';
import Round from './Round';

import { socialLinks } from '../data/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="h-[100dvh] relative bg-black text-white flex flex-col justify-between overflow-hidden">
      <Round className="absolute top-0 right-80" />

      {/* Top Section */}
      <MotionDiv className="flex justify-center items-center pt-28">
        <h1 className="text-5xl font-bold">Let&apos;s work together.</h1>
      </MotionDiv>

      {/* Middle Section */}
      <MotionDiv
        className="flex flex-col justify-center items-center flex-grow gap-4"
        delay={0.3}
        animationType="fadeInScale">
        <h3 className="text-xl p-4 text-gray-200 font-playwrite font-thin">
          I&apos;m available for freelance work.
        </h3>
        <Button
          text="SAY HELLO"
          href="/contact"
          icon={<GoArrowRight className="text-2xl" />}
          className="text-white"
          circleColor="bg-gradient-to-r from-jet-black/70 via-jet-black/50 to-jet-black/30"
          hoverWidth="140px"
        />
      </MotionDiv>

      <Circle className="absolute overflow-hidden w-48 h-48 left-[-70px] bottom-[-70px]" />

      {/* Bottom Section */}
      <MotionDiv
        className="w-full flex justify-center items-center p-12 gap-8 text-xs"
        delay={0.6}
        animationType="fadeInUp">
        <p className=" text-white">© {currentYear} Prasenjit Das</p>
        <p className="text-xl">||</p>
        <div className="flex gap-2">
          {socialLinks.map(
            (
              link: { href: string; icon: React.ElementType; label: string },
              index: number
            ) => (
              <MotionDiv key={index} animationType="fadeInScale" delay={0.9}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 flex justify-center items-center bg-black rounded-full hover:bg-white hover:text-black"
                  aria-label={link.label}>
                  <link.icon />
                </Link>
              </MotionDiv>
            )
          )}
        </div>
      </MotionDiv>
    </section>
  );
};

export default Footer;
