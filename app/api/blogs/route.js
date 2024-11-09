import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/config/mongodb'
import Blog from '@/models/Blog'

// API route handler to fetch blogs
export default async function handler(req, res) {
  // Connect to MongoDB
  await connectDb()

  try {
    // Fetch blogs from MongoDB
    const blogs = await Blog.find()
      .populate('user', 'name email') // Populate user data (you can modify this as per your requirements)
      .sort({ createdAt: -1 }) // Sort blogs by creation date, newest first

    // Send the fetched blogs as a JSON response
    res.status(200).json({ blogs })
  } catch (error) {
    console.error('Error fetching blogs:', error)
    res.status(500).json({ message: 'Failed to fetch blogs' })
  }
}

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

// GET method to retrieve all blog posts
export async function GET() {
  try {
    // Establish DB connection
    const client = await clientPromise // Resolving the client
    const db = client.db() // Access the database
    const blogCollection = db.collection('blogs') // Access the 'blogs' collection

    // Retrieve all blogs
    const blogs = await blogCollection.find().toArray()

    return NextResponse.json(
      { message: 'Blogs fetched successfully', blogs },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching blogs:', error) // Log the full error for debugging
    return NextResponse.json(
      { message: 'Failed to fetch blogs', error: error.message },
      { status: 500 }
    )
  }
}
