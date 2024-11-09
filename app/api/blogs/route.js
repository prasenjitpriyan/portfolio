// app/api/blogs/route.js
import { getSession } from 'next-auth/react'
import dbConnect from '@/lib/dbConnect'

export async function POST(req) {
  try {
    // Get the request body (data sent from the client)
    const { title, description, image } = await req.json()

    // Connect to the database
    const db = await dbConnect()

    // Get session to ensure the user is authenticated
    const session = await getSession()

    console.log('Session:', session) // Debugging line

    if (!session) {
      return new Response(
        JSON.stringify({ message: 'You must be logged in to create a blog' }),
        { status: 401 }
      )
    }

    // Create a new blog post object
    const newBlog = {
      title,
      description,
      image,
      user: session.user.id, // Use user ID from session to associate the blog
      createdAt: new Date()
    }

    // Insert the new blog into the collection
    const blogCollection = db.collection('blogs')
    const result = await blogCollection.insertOne(newBlog)

    // Fetch the newly inserted blog
    const insertedBlog = await blogCollection.findOne({
      _id: result.insertedId
    })

    return new Response(
      JSON.stringify({
        message: 'Blog created successfully',
        blog: insertedBlog
      }),
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating blog:', error)
    return new Response(
      JSON.stringify({
        message: 'Failed to create blog',
        error: error.message
      }),
      { status: 500 }
    )
  }
}
