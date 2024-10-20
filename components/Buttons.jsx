'use client'
import React from 'react'
import { Button } from '@/components/ui/moving-border'
import Link from 'next/link'

const Buttons = () => {
  return (
    <div className="mt-12 flex gap-8">
      <Button
        borderRadius="1rem"
        className="bg-my-color-1 text-my-color-5 border-my-color-7 hover:text-my-color-4"
      >
        <Link href={'/projects'}>View my projects</Link>
      </Button>
      <Button
        borderRadius="1rem"
        className="bg-my-color-2 text-white border-my-color-7 hover:text-my-color-5"
      >
        <Link href={'/contact'}>Get in touch</Link>
      </Button>
    </div>
  )
}

export default Buttons
