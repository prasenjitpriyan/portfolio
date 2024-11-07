'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SignOutPage() {
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      signOut({ callbackUrl: '/' })
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Signing Out...</h2>
        <p>You will be redirected shortly.</p>
      </div>
    </div>
  )
}
