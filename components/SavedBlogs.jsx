import React from 'react'
import Image from 'next/image'

const SavedBlogs = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <p>No blogs available.</p>
  }

  return (
    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {blogs.map((blog) => (
        <div
          key={blog.id}
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
            <p className="text-gray-600">{blog.description}</p>
            <button className="mt-2 text-blue-500">Read More</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SavedBlogs
