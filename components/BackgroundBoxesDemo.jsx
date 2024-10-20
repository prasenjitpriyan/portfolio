'use client'

import React from 'react'
import { Boxes } from '@/components/ui/background-boxes'
import Avatar from './Avatar'
import Hero from './Hero'
import TextGenerate from './TextGenerateEffect'
import Buttons from './Buttons'

const BackgroundBoxesDemo = () => {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-my-color-2 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-my-color-5 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <Avatar />
      <Hero />
      <TextGenerate />
      <Buttons />
    </div>
  )
}

export default BackgroundBoxesDemo
