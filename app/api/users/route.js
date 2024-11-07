import dbConnect from '@/lib/mongodb'
import User from '@/models/User'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

async function handler(req) {
  await dbConnect()

  if (req.method === 'POST') {
    const { username, email, password, action } = await req.json()

    if (!username || !email || !password) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    if (action === 'register') {
      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return new NextResponse('User already exists', { status: 400 })
      }
      const hashedPassword = await bcrypt.hash(password, 12)
      // Create new user
      const newUser = new User({
        username,
        email,
        password: hashedPassword
      })

      await newUser.save()
      return new NextResponse(
        JSON.stringify({ message: 'User registered successfully' }),
        {
          status: 201
        }
      )
    }

    if (action === 'login') {
      const user = await User.findOne({ email })
      if (!user) {
        return new NextResponse('User not found', { status: 404 })
      }

      const isMatch = await user.comparePassword(password)
      if (!isMatch) {
        return new NextResponse('Invalid password', { status: 401 })
      }

      return new NextResponse(
        JSON.stringify({ message: 'Login successful', user }),
        { status: 200 }
      )
    }
  }

  return new NextResponse('Method not allowed', { status: 405 })
}

export { handler as POST }
