import React from 'react'

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'John Doe',
      text: 'Working with Prasenjit Das was a game-changer for our project. Their expertise in JavaScript and TypeScript made complex tasks feel manageable.'
    },
    {
      name: 'Jane Smith',
      text: 'Prasenjit is a highly skilled developer. Their commitment to delivering quality work and effective solutions has made a significant impact on our team.'
    },
    {
      name: 'Alice Johnson',
      text: "I appreciated Prasenjit's attention to detail and ability to simplify challenging concepts. They are a true asset to any project."
    }
  ]

  return (
    <section className="min-h-screen bg-my-color-2 p-6 sm:p-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-my-color-4 mb-8">
          Testimonials
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-my-color-4 rounded-lg shadow-lg p-6">
              <p className="text-my-color-2 italic mb-4">
                “{testimonial.text}”
              </p>
              <h3 className="font-semibold text-my-color-2">
                — {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsPage
