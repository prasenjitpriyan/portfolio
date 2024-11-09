import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({ blogs, handleReadMore }) => {
  return (
    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {blogs.map((blog) => (
        <BlogItem key={blog._id} blog={blog} handleReadMore={handleReadMore} />
      ))}
    </div>
  )
}

export default BlogList
