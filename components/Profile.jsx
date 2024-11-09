'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation' // Correct import from next/navigation

const Profile = () => {
  const { data: session } = useSession()
  const user = session?.user
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const dropdownRef = useRef(null)
  const router = useRouter() // Corrected use of useRouter from next/navigation

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev)
  }

  const goToAddBlog = () => {
    router.push('/add-blog') // Use router.push() from next/navigation
  }

  return (
    <div className="relative">
      {/* Profile Image and Name */}
      <div className="flex items-center space-x-4">
        {user?.image && (
          <div className="relative">
            <Image
              src={user.image}
              alt="User Profile Picture"
              width={50}
              height={50}
              className="rounded-full border-2 border-my-color-5 cursor-pointer hover:opacity-80"
              onClick={toggleDropdown}
            />
            {/* Optional: small indicator for dropdown */}
            {dropdownVisible && (
              <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-blue-500"></div>
            )}
          </div>
        )}
        <div>
          <h2 className="font-semibold text-lg text-my-color-5">
            {user?.name}
          </h2>
          <p className="text-sm text-my-color-4">{user?.email}</p>
        </div>
      </div>

      {/* Dropdown Menu */}
      {dropdownVisible && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-my-color-4 rounded-lg shadow-lg"
        >
          <ul className="py-2">
            <li>
              <button
                onClick={goToAddBlog}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Add Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => signOut()}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Profile
