'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(10)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          router.replace('/home') // Redirect automatically to the home page
          return 100
        }
        return prev + 5 // Progress speed
      })
    }, 100) // Progress interval time

    return () => clearInterval(interval)
  }, [router])

  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-4">PRASENJIT DAS</h1>
      <div className="w-2/3 h-2 bg-gray-700 rounded">
        <div
          className="h-full bg-white rounded transition-all duration-150"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-4">{progress}%</p>
    </div>
  )
}

export default Loading
