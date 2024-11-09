import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/config/mongodb'

export async function POST(req) {
  try {
    // Parse the incoming JSON body
    const { title, description, image } = await req.json()

    // Validate required fields
    if (!title || !description || !image) {
      return NextResponse.json(
        { message: 'Title, description, and image URL are required' },
        { status: 400 }
      )
    }

    // Establish DB connection
    const client = await clientPromise // Resolving the client
    const db = client.db() // Access the database
    const blogCollection = db.collection('blogs') // Access the 'blogs' collection

    // Create the new blog post object
    const newBlog = {
      title,
      description,
      image,
      createdAt: new Date()
    }

    // Insert into the 'blogs' collection
    const result = await blogCollection.insertOne(newBlog)

    // Check if insertion was successful
    if (!result.acknowledged) {
      throw new Error('Failed to insert blog into database')
    }

    // Fetch the newly inserted blog to return it
    const insertedBlog = await blogCollection.findOne({
      _id: result.insertedId
    })

    return NextResponse.json(
      { message: 'Blog created successfully', blog: insertedBlog },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating blog:', error) // Log the full error for debugging
    return NextResponse.json(
      { message: 'Failed to create blog', error: error.message },
      { status: 500 }
    )
  }
}
