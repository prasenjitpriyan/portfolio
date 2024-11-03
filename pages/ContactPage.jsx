import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-my-color-2 max-w-8xl p-8">
      <div className="mx-auto bg-my-color-4 rounded-lg shadow-lg p-12">
        <h1 className="text-3xl font-bold text-my-color-2 text-center mb-6">
          Contact Me
        </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-my-color-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full p-3 border border-my-color-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
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
    </section>
  )
}

export default ContactPage
