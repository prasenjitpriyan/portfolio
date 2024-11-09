import React from 'react'
import Image from 'next/image'

const BlogItem = ({ blog, handleReadMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
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
        <p className="text-gray-600 line-clamp-4">{blog.description}</p>
        <button
          onClick={() => handleReadMore(blog)} // Open modal
          className="mt-2 text-blue-500"
        >
          Read More
        </button>
      </div>
    </div>
  )
}

export default BlogItem
