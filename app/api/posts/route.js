import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'
import User from '@/models/User'
import { NextResponse } from 'next/server'

async function handler(req) {
  await dbConnect()

  // Fetch all blogs
  if (req.method === 'GET') {
    const blogs = await Blog.find({})
    return new NextResponse(JSON.stringify(blogs), { status: 200 })
  }

  // Create a new blog post (associating it with a user)
  if (req.method === 'POST') {
    const { userId, title, description, image } = await req.json()

    // Ensure all required fields are provided
    if (!userId || !title || !description || !image) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    try {
      // Ensure the user exists before creating the blog
      const user = await User.findById(userId)
      if (!user) {
        return new NextResponse('User not found', { status: 404 })
      }

      // Create the new blog post
      const newBlog = new Blog({
        title,
        description,
        image,
        userId
      })

      await newBlog.save()
      return new NextResponse(JSON.stringify(newBlog), { status: 201 })
    } catch (error) {
      return new NextResponse('Error creating blog post', { status: 500 })
    }
  }

  // Fetch a specific blog by ID
  if (req.method === 'GET' && req.url.includes('id')) {
    const { id } = req.query

    try {
      const blog = await Blog.findById(id).populate(
        'userId',
        'username profileImage'
      ) // Populate user details
      if (!blog) {
        return new NextResponse('Blog not found', { status: 404 })
      }
      return new NextResponse(JSON.stringify(blog), { status: 200 })
    } catch (error) {
      return new NextResponse('Error fetching blog post', { status: 500 })
    }
  }

  // Update a specific blog by ID
  if (req.method === 'PUT') {
    const { id } = req.query
    const { title, description, image } = await req.json()

    if (!title || !description || !image) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    try {
      const updatedBlog = await Blog.findByIdAndUpdate(
        id,
        { title, description, image },
        { new: true }
      )

      if (!updatedBlog) {
        return new NextResponse('Blog not found', { status: 404 })
      }
      return new NextResponse(JSON.stringify(updatedBlog), { status: 200 })
    } catch (error) {
      return new NextResponse('Error updating blog post', { status: 500 })
    }
  }

  // Delete a specific blog by ID
  if (req.method === 'DELETE') {
    const { id } = req.query

    try {
      const deletedBlog = await Blog.findByIdAndDelete(id)
      if (!deletedBlog) {
        return new NextResponse('Blog not found', { status: 404 })
      }
      return new NextResponse('Blog deleted successfully', { status: 200 })
    } catch (error) {
      return new NextResponse('Error deleting blog post', { status: 500 })
    }
  }

  return new NextResponse('Method not allowed', { status: 405 })
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE }
