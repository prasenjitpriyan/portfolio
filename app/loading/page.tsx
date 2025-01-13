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
          return 100
        }
        return prev + 5
      })
    }, 100)
    if (progress === 100) {
      router.replace('/home')
    }

    return () => clearInterval(interval)
  }, [progress, router])

  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center text-white">
      <h1 className="text-2xl text-pretty font-thin mb-4">PRASENJIT DAS</h1>
      <div className="w-2/3 h-[1px] rounded">
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
