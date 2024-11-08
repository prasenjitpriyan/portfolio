'use client'

import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const Profile = () => {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <div className="flex items-center space-x-4">
      {user?.image && (
        <Image
          src={user.image}
          alt="User Profile Picture"
          width={50}
          height={50}
          className="rounded-full"
        />
      )}
      <div>
        <h2 className="font-semibold">{user?.name}</h2>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>
    </div>
  )
}

export default Profile
