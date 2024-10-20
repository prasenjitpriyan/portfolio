'use client'

import React from 'react'
import { Boxes } from '@/components/ui/background-boxes'
import { cn } from '@/lib/utils'
import { NavbarDemo } from '@/components/Navbar'
import BackgroundBoxesDemo from '@/components/BackgroundBoxesDemo'

export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <BackgroundBoxesDemo />
    </main>
  )
}
