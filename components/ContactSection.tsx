'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactForm from './ContactForm';
import Header from './Header';

const ContactSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section className="relative min-h-screen bg-ghost-white text-jet-black flex flex-col">
      {/* Header */}
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="fixed left-8 top-[50%] rotate-[270deg] w-8 h-8">
        <p className="text-xs">CONTACT</p>
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center h-full px-6">
        <div className="px-20 py-20 max-w-4xl">
          {/* Heading Section */}
          <div className="pb-8 text-center">
            <h1 className="text-5xl pb-2">Get in touch</h1>
            <p className="font-playwrite text-lg text-gray-600">
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <div className="fixed w-full h-20 bottom-0">
        <div className="flex justify-center items-center w-full h-full gap-8">
          <p className="text-xs text-gray-500">
            © {currentYear} Prasenjit Das
          </p>
          <p className="text-xl">{'||'}</p>
          <div className="flex gap-2">
            <Link href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-gray-500" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-gray-500" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-gray-500" />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="text-gray-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
