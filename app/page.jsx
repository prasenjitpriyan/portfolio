import React from 'react'
import { ImagesSlider } from '@/components/ui/images-slider'
import HeroContent from '@/components/HeroContent'
import firstPhase from '@/assets/images/First.jpeg'
import secondPhase from '@/assets/images/second.jpeg'
import thirdPhase from '@/assets/images/third.jpeg'
import fourthPhase from '@/assets/images/four.jpeg'

const Home = () => {
  const images = [firstPhase, secondPhase, thirdPhase, fourthPhase]

  return (
    <section className="min-h-[calc(100svh-2rem)] bg-my-color-1 m-4 p-4 rounded-md shadow-lg">
      <ImagesSlider
        className="h-[calc(93svh)] rounded overflow-hidden"
        images={images}
      >
        <HeroContent />
      </ImagesSlider>
    </section>
  )
}

export default Home
