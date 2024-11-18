import React from 'react'
import Image from 'next/image'

const SavedBlogs = ({ blogs, openModal }) => {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-my-color-1 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            priority={false}
            width={400}
            height={250}
            className="rounded-lg object-cover w-full h-40 mb-4"
          />
          <h2 className="text-xl font-bold text-my-color-4 mb-2">
            {blog.title}
          </h2>
          <p className="text-my-color-4 mb-4">
            {blog.content.length > 100
              ? `${blog.content.slice(0, 100)}...`
              : blog.content}
          </p>
          <button
            onClick={() => openModal(blog)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  )
}

export default SavedBlogs
