import React, { useState } from 'react'
import BlogList from './BlogList'
import BlogModal from './BlogModal'

const SavedBlogs = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(null)

  const handleReadMore = (blog) => {
    setSelectedBlog(blog)
  }

  const closeModal = () => {
    setSelectedBlog(null)
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', options)
  }

  if (!blogs || blogs.length === 0) {
    return <p>No blogs available.</p>
  }

  return (
    <div>
      {/* Blog List */}
      <BlogList blogs={blogs} handleReadMore={handleReadMore} />

      {/* Modal to show full blog details */}
      {selectedBlog && (
        <BlogModal
          selectedBlog={selectedBlog}
          closeModal={closeModal}
          formatDate={formatDate}
        />
      )}
    </div>
  )
}

export default SavedBlogs
