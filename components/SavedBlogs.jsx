import React, { useState } from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa' // Import React Icon for close button

const SavedBlogs = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(null)

  // Function to handle the "Read More" click
  const handleReadMore = (blog) => {
    setSelectedBlog(blog) // Set the selected blog for modal display
  }

  const closeModal = () => {
    setSelectedBlog(null) // Close modal by clearing the selected blog
  }

  if (!blogs || blogs.length === 0) {
    return <p>No blogs available.</p>
  }

  return (
    <div>
      {/* Blog List */}
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {blogs.map((blog) => (
          <div
            key={blog._id} // Use _id if it's available in your blog data
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
          >
            <Image
              priority
              width={1080}
              height={720}
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>

              {/* Truncate description to 4 lines using line-clamp */}
              <p className="text-gray-600 line-clamp-4">{blog.description}</p>

              <button
                onClick={() => handleReadMore(blog)} // Open modal on "Read More"
                className="mt-2 text-blue-500"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal to show full blog details */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={closeModal} // Close modal
              className="absolute top-4 right-4 text-gray-600"
            >
              <FaTimes size={24} />
            </button>

            {/* Blog Image */}
            <div className="mb-4">
              <Image
                priority
                width={1080}
                height={720}
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Blog Title */}
            <h2 className="text-2xl font-semibold">{selectedBlog.title}</h2>

            {/* Full Blog Description */}
            <p className="text-gray-800 mt-4">{selectedBlog.description}</p>

            {/* Blog Date and Creator */}
            <div className="mt-4 text-gray-500">
              <p>Date: {selectedBlog.date}</p>
              <p>Creator: {selectedBlog.creator}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SavedBlogs
