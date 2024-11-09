'use client'

import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const AddBlogPage = () => {
  const { data: session } = useSession()
  const router = useRouter()

  // State for form fields
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !description || !image) {
      setError('All fields are required')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description,
          image,
          user: session?.user?.id // User ID from session
        })
      })

      const result = await response.json()

      if (response.ok) {
        router.push('/') // Redirect to home or blogs page after successful creation
      } else {
        setError(result.message || 'Something went wrong')
      }
    } catch (error) {
      setError('An error occurred while submitting your blog')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        {/* Title Field */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter blog title"
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter blog description"
          />
        </div>

        {/* Image URL Field */}
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 font-medium mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter image URL"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4 text-center">
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className={`w-full py-2 px-4 text-white bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-700 ${
              loading && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Add Blog'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddBlogPage
