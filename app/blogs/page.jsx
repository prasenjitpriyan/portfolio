'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'

const BlogPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [visibleBlogs, setVisibleBlogs] = useState(6)

  const blogs = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'This is a short description of the first blog post.',
      image: '/myIMG.jpg'
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'This is a short description of the second blog post.',
      image: '/myIMG.jpg'
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'This is a short description of the third blog post.',
      image: '/myIMG.jpg'
    },
    {
      id: 4,
      title: 'Blog Title 4',
      description: 'This is a short description of the first blog post.',
      image: '/myIMG.jpg'
    },
    {
      id: 5,
      title: 'Blog Title 5',
      description: 'This is a short description of the second blog post.',
      image: '/myIMG.jpg'
    },
    {
      id: 6,
      title: 'Blog Title 6',
      description: 'This is a short description of the third blog post.',
      image: '/myIMG.jpg'
    },
    {
      id: 7,
      title: 'Blog Title 7',
      description: 'This is a short description of the third blog post.',
      image: '/myIMG.jpg'
    },
    {
      id: 8,
      title: 'Blog Title 8',
      description: 'This is a short description of the third blog post.',
      image: '/myIMG.jpg'
    },
    {
      id: 9,
      title: 'Blog Title 9',
      description: 'This is a short description of the third blog post.',
      image: '/myIMG.jpg'
    }
  ]

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3)
  }

  return (
    <div className="min-h-[calc(100svh-4rem)] bg-my-color-2 flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 min-h-[calc(100svh-4rem)] bg-my-color-4 p-4 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 lg:w-1/4`}
      >
        <div className="flex items-center justify-between lg:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            Close
          </button>
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <select className="w-full p-2 mb-4 border rounded-lg">
            <option>Sort by</option>
            <option>Newest</option>
            <option>Oldest</option>
            <option>Popular</option>
          </select>
          <select className="w-full p-2 border rounded-lg">
            <option>Filter by Category</option>
            <option>Tech</option>
            <option>Design</option>
            <option>Development</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-2 p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-my-color-4">Blogs</h1>
          <button
            onClick={() => signIn('google')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-4"
          >
            <FaGoogle />
            <span>Sign In</span>
          </button>
        </div>

        {/* Blogs Listing */}
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {blogs.slice(0, visibleBlogs).map((blog) => (
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

        {/* Load More Button */}
        {visibleBlogs < blogs.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMoreBlogs}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Load More
            </button>
          </div>
        )}
      </main>

      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg lg:hidden"
      >
        Filter
      </button>
    </div>
  )
}

export default BlogPage
