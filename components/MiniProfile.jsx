'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import { HiDotsHorizontal } from 'react-icons/hi'

const MiniProfile = () => {
  const { user } = useUser()
  if (!user) {
    return null // If no user is found, return null
  }

  return (
    <div className="text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200 justify-between xl:w-56 w-fit gap-2">
      <UserButton />
      <div className="hidden xl:inline flex-1 w-8">
        <h4 className="font-bold text-sm truncate">{user.fullName}</h4>
        <p className="text-gray-500 text-sm truncate">@{user.username}</p>
      </div>
      <HiDotsHorizontal className="h-3 w-3 hidden xl:inline" />
    </div>
  )
}

export default MiniProfile