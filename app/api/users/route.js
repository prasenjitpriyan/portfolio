import dbConnect from '@/lib/mongodb'
import User from '@/models/User'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

async function handler(req) {
  await dbConnect()

  // Fetch user details (this could be a logged-in user, based on authentication)
  if (req.method === 'GET') {
    const { userId } = req.query // You can authenticate via JWT or session to get the logged-in user
    try {
      const user = await User.findById(userId)
      if (!user) {
        return new NextResponse('User not found', { status: 404 })
      }
      return new NextResponse(JSON.stringify(user), { status: 200 })
    } catch (error) {
      return new NextResponse('Error fetching user data', { status: 500 })
    }
  }

  // Register a new user (POST)
  if (req.method === 'POST') {
    const { username, email, password, profileImage } = await req.json()

    if (!username || !email || !password) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    try {
      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return new NextResponse('User already exists', { status: 409 })
      }

      const hashedPassword = await bcrypt.hash(password, 12)

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        profileImage:
          profileImage ||
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      })

      await newUser.save()

      return new NextResponse(JSON.stringify(newUser), { status: 201 })
    } catch (error) {
      return new NextResponse('Error creating user', { status: 500 })
    }
  }

  // Update user details (including profile image)
  if (req.method === 'PUT') {
    const { userId } = req.query
    const { username, email, password, profileImage } = await req.json()

    if (!userId) {
      return new NextResponse('User ID is required', { status: 400 })
    }

    try {
      const user = await User.findById(userId)
      if (!user) {
        return new NextResponse('User not found', { status: 404 })
      }

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 12)
        user.password = hashedPassword
      }

      user.username = username || user.username
      user.email = email || user.email
      user.profileImage = profileImage || user.profileImage

      await user.save()
      return new NextResponse(JSON.stringify(user), { status: 200 })
    } catch (error) {
      return new NextResponse('Error updating user data', { status: 500 })
    }
  }

  // Delete user (DELETE)
  if (req.method === 'DELETE') {
    const { userId } = req.query

    if (!userId) {
      return new NextResponse('User ID is required', { status: 400 })
    }

    try {
      const user = await User.findByIdAndDelete(userId)
      if (!user) {
        return new NextResponse('User not found', { status: 404 })
      }
      return new NextResponse('User deleted successfully', { status: 200 })
    } catch (error) {
      return new NextResponse('Error deleting user', { status: 500 })
    }
  }

  return new NextResponse('Method not allowed', { status: 405 })
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE }
