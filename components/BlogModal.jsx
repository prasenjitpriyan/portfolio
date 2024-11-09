import React from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

const BlogModal = ({ selectedBlog, closeModal, formatDate }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600"
        >
          <FaTimes size={24} />
        </button>

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

        <h2 className="text-2xl font-semibold">{selectedBlog.title}</h2>
        <p className="text-gray-800 mt-4">{selectedBlog.description}</p>

        <div className="mt-4 text-gray-500">
          <p>Date: {formatDate(selectedBlog.createdAt)}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogModal
