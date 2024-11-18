'use client'

import React, { useState } from 'react'
import SavedBlogs from '@/components/SavedBlogs'

const BlogPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [visibleBlogs, setVisibleBlogs] = useState(6) // Default number of blogs to display
  const [selectedBlog, setSelectedBlog] = useState(null) // Track the blog to display in the modal
  const [currentIndex, setCurrentIndex] = useState(null) // Track the current blog index in the modal
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSort, setSelectedSort] = useState('title')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      content:
        'This is blog 1 content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, saepe minus, necessitatibus ea numquam ab blanditiis reprehenderit odio maxime.',
      image: '/myIMG.jpg'
    },
    {
      id: 2,
      title: 'Blog 2',
      content: 'This is blog 2 content.',
      image: '/myIMG.jpg'
    },
    {
      id: 3,
      title: 'Blog 3',
      content: 'This is blog 3 content.',
      image: '/myIMG.jpg'
    },
    {
      id: 4,
      title: 'Blog 4',
      content: 'This is blog 4 content.',
      image: '/myIMG.jpg'
    },
    {
      id: 5,
      title: 'Blog 5',
      content: 'This is blog 5 content.',
      image: '/myIMG.jpg'
    },
    {
      id: 6,
      title: 'Blog 6',
      content: 'This is blog 6 content.',
      image: '/myIMG.jpg'
    },
    {
      id: 7,
      title: 'Blog 7',
      content: 'This is blog 7 content.',
      image: '/myIMG.jpg'
    },
    {
      id: 8,
      title: 'Blog 8',
      content: 'This is blog 8 content.',
      image: '/myIMG.jpg'
    }
  ]

  // Filter and search the blogs
  const filteredBlogs = blogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((blog) =>
      selectedFilter === 'all'
        ? true
        : blog.title.toLowerCase().includes(selectedFilter.toLowerCase())
    )
    .sort((a, b) => {
      if (selectedSort === 'title') {
        return a.title.localeCompare(b.title)
      } else {
        return a.id - b.id
      }
    })

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3)
  }

  const openModal = (blog, index) => {
    setSelectedBlog(blog)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedBlog(null)
    setCurrentIndex(null)
  }

  const nextBlog = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length)
    setSelectedBlog(blogs[(currentIndex + 1) % blogs.length])
  }

  const prevBlog = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length
    )
    setSelectedBlog(blogs[(currentIndex - 1 + blogs.length) % blogs.length])
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-my-color-2 flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 min-h-[calc(100vh-4rem)] bg-my-color-1 p-4 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 lg:w-1/4`}
      >
        <div className="flex items-center justify-between lg:hidden">
          <h2 className="text-lg font-semibold text-my-color-4">Filters</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            Close
          </button>
        </div>

        {/* Search Input */}
        <div className="mb-4">
          <label
            htmlFor="search"
            className="block text-my-color-4 font-semibold mb-2"
          >
            Search Blogs
          </label>
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title"
            className="w-full p-2 bg-my-color-4 text-my-color-1 rounded-lg"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="sort"
            className="block text-my-color-4 font-semibold mb-2"
          >
            Sort By
          </label>
          <select
            id="sort"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="w-full p-2 bg-my-color-4 text-my-color-1 rounded-lg"
          >
            <option value="title">Title</option>
            <option value="date">Date</option>
          </select>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="filter"
            className="block text-my-color-4 font-semibold mb-2"
          >
            Filter By
          </label>
          <select
            id="filter"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="w-full p-2 bg-my-color-4 text-my-color-1 rounded-lg"
          >
            <option value="all">All</option>
            <option value="blog">Blog</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:ml-2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-my-color-4">Blogs</h1>
        </div>

        <SavedBlogs
          blogs={filteredBlogs.slice(0, visibleBlogs)}
          openModal={openModal}
        />

        {/* Load More Button */}
        {visibleBlogs < filteredBlogs.length && (
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

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full overflow-y-auto max-h-[80vh]">
            <h2 className="text-xl font-bold mb-4">{selectedBlog.title}</h2>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="mb-4 rounded-lg"
            />
            <p>{selectedBlog.content}</p>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={prevBlog}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Previous
              </button>
              <button
                onClick={nextBlog}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Next
              </button>
            </div>

            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogPage
