import React from 'react'

const AboutMe: React.FC = () => {
  return (
    <section className="h-[80svh] flex items-center justify-center bg-white px-20 py-20">
      <div className="max-w-4xl text-center">
        <p className="text-xl md:text-3xl font-light italic text-jet-black leading-relaxed">
          &ldquo;For more than ten years, I honed precision and dedication as a
          Postal Assistant to ensure seamless communication for hundreds of
          thousands of individuals. Through this journey, I discovered a passion
          for problem-solving and creativity that led me to the world of coding.
          Today, I specialize in building intuitive and impactful web
          applications using JavaScript. From delivering postal services to
          delivering code, I am fueled by a desire to create meaningful digital
          experiences that make a difference.&rdquo;
        </p>
      </div>
    </section>
  )
}

export default AboutMe
