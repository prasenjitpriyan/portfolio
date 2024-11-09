'use client'

import React, { useState, useEffect } from 'react'
import { signIn, useSession, getProviders } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'
import Profile from '@/components/Profile'
import SavedBlogs from '@/components/SavedBlogs'

const BlogPage = () => {
  const { data: session } = useSession() // Check if user is signed in
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [visibleBlogs, setVisibleBlogs] = useState(6)
  const [blogs, setBlogs] = useState([]) // State to store fetched blogs
  const [providers, setProviders] = useState(null)

  // Fetching authentication providers for the sign-in button
  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    setAuthProviders()
  }, [])

  // Fetching blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs')
        const data = await response.json()

        if (response.ok) {
          setBlogs(data.blogs) // Store the fetched blogs in state
        } else {
          console.error('Failed to fetch blogs:', data.message)
        }
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }

    fetchBlogs() // Fetch blogs when the component mounts
  }, [])

  // Load more blogs when the "Load More" button is clicked
  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-my-color-2 flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 min-h-[calc(100vh-4rem)] bg-my-color-4 p-4 transition-transform transform ${
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
          {session ? (
            <div className="flex items-center gap-2">
              <Profile /> {/* Display profile information if logged in */}
            </div>
          ) : (
            <button
              onClick={() => signIn('google')}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
            >
              <FaGoogle />
              <span className="font-semibold">Sign In</span>
            </button>
          )}
        </div>

        {/* Blogs Listing */}
        <SavedBlogs blogs={blogs.slice(0, visibleBlogs)} />

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
