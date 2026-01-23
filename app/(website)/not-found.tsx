'use client';

import Error404 from '@/components/Error404';
import Header from '@/components/Header';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

const NotFound: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <AnimatePresence mode="wait">
      <section className="relative h-screen bg-ghost-white text-jet-black flex flex-col">
        {/* Header */}
        <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className="relative flex flex-1 items-center px-20 py-20 md:flex-row flex-col-reverse z-20">
          <div className="flex-1 space-y-6 text-center">
            <h1 className="text-3xl md:text-7xl font-semibold">404</h1>
            <p className="text-2xl font-bold">Page not found</p>
            <p className="text-xl pb-4">
              The page you are looking for doesn&apos;t exist.
            </p>
            <button>
              <Link
                href={'/'}
                className="bg-jet-black text-white px-8 py-4 rounded">
                Go Back
              </Link>
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center relative z-20 h-96 md:h-full">
            <div className="w:[250] h-[250] sm:w-[300] sm:h-[300] md:w-[400] md:h-[400] lg:w-[500] lg:h-[500] flex justify-center">
              <Error404 />
            </div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default NotFound;
