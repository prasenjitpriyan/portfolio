'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  const maxLength = 1000;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: message,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setMessage('');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
      console.error('Contact form error:', error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6">
      {/* Form Section */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        variants={containerVariants}>
        {/* Name */}
        <motion.div className="mb-6" variants={inputVariants}>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full px-4 py-2 bg-ghost-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-all duration-300 ease-in-out"
            placeholder="Your Name"
            required
            disabled={status === 'loading'}
          />
        </motion.div>

        {/* Email */}
        <motion.div className="mb-6" variants={inputVariants}>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full px-4 py-2 bg-ghost-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-all duration-300 ease-in-out"
            placeholder="Your Email"
            required
            disabled={status === 'loading'}
          />
        </motion.div>

        {/* Subject */}
        <motion.div className="mb-6" variants={inputVariants}>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block w-full px-4 py-2 bg-ghost-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-all duration-300 ease-in-out"
            placeholder="Subject"
            required
            disabled={status === 'loading'}
          />
        </motion.div>

        {/* Message */}
        <motion.div className="mb-6 relative" variants={inputVariants}>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full px-4 py-2 bg-ghost-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-all duration-300 ease-in-out"
            placeholder="Enter your message"
            value={message}
            onChange={handleMessageChange}
            maxLength={maxLength}
            required
            disabled={status === 'loading'}></textarea>
          {/* Character Counter */}
          <div className="absolute bottom-2 right-4 text-sm text-gray-500">
            {`${message.length}/${maxLength}`}
          </div>
        </motion.div>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 font-medium">
            Message sent successfully!
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 font-medium">
            {errorMessage}
          </motion.div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            text={status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
            type="submit"
            disabled={status === 'loading'}
            icon={
              status === 'loading' ? null : (
                <GoArrowRight className="text-2xl" />
              )
            }
            className="relative inline-flex items-center"
            hoverWidth="180px"
          />
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
