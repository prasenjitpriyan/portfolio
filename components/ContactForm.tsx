import React, { useState } from 'react'
import Button from './Button'
import { GoArrowRight } from 'react-icons/go'

const ContactForm: React.FC = () => {
  const [message, setMessage] = useState('')
  const maxLength = 1000

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  return (
    <div>
      {/* Form Section */}
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Name */}
        <div className="mb-6">
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full px-4 py-2 bg-ghost-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-all duration-300 ease-in-out"
            placeholder="Your Name"
            required
          />
          {/* Animated Border */}
          <div className="w-full h-0.5 bg-black scale-x-0 transform origin-left transition-transform duration-300 ease-in-out focus-within:scale-x-100"></div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full px-4 py-2 bg-ghost-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-all duration-300 ease-in-out"
            placeholder="Your Email"
            required
          />
        </div>

        {/* Subject */}
        <div className="mb-6">
          <input
            type="text"
            id="subject"
            name="subject"
            className="block w-full px-4 py-2 bg-ghost-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-all duration-300 ease-in-out"
            placeholder="Subject"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6 relative">
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
          ></textarea>
          {/* Character Counter */}
          <div className="absolute bottom-2 right-4 text-sm text-gray-500">
            {`${message.length}/${maxLength}`}
          </div>
        </div>
      </form>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          text="SEND MESSAGE"
          href={'/'}
          icon={<GoArrowRight className="text-2xl" />}
          className="relative inline-flex items-center transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  )
}

export default ContactForm
