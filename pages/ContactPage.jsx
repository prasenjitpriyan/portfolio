import React from 'react'
import ImageComponent from '@/components/ImageComponent'

const ContactPage = () => {
  return (
    <section className="h-auto bg-my-color-2 max-w-8xl">
      <div className="mx-auto rounded-lg shadow-lg p-8 md:flex">
        {/* Left Column: Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/2 md:pr-6">
          <ImageComponent src="/myIMG.jpg" alt="Description of the image" />
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-my-color-4 text-center md:text-left mb-6">
            Contact Me
          </h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-my-color-4">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-3 border border-my-color-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-my-color-4">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-3 border border-my-color-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-my-color-4">
                Message
              </label>
              <textarea
                id="message"
                required
                rows="4"
                className="w-full p-3 border border-my-color-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-my-color-4 text-white font-semibold py-3 rounded-md hover:bg-my-color-5 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
