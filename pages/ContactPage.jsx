import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-6 sm:p-12">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Contact Me
        </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-8">
        <a
          href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn profile
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/your-profile" // Replace with your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://twitter.com/your-profile" // Replace with your Twitter profile
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          <FaTwitter size={30} />
        </a>
      </div>
    </section>
  )
}

export default ContactPage
