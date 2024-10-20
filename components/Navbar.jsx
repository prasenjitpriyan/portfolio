'use client'
import React, { useState } from 'react'
import { Menu, MenuItem } from '@/components/ui/navbar-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  )
}

function Navbar({ className }) {
  const [active, setActive] = useState(null)
  return (
    <div
      className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}
    >
      <Menu setActive={setActive}>
        <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href={'/about'}>
          <MenuItem setActive={setActive} active={active} item="About" />
        </Link>
      </Menu>
    </div>
  )
}
