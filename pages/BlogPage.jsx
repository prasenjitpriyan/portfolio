import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import MotionDiv from '@/components/MotionDiv'

const BlogPage = () => {
  const blogs = [
    {
      title: 'Best Practices for JavaScript/TypeScript Development',
      description:
        'Explore the essential practices for writing clean, maintainable, and efficient JavaScript and TypeScript code.',
      date: 'October 25, 2024',
      link: '/blog/best-practices-javascript-typescript',
      image: '/myIMG.jpg' // Update this path to your image
    },
    {
      title: 'Tutorials on Frameworks and Libraries',
      description:
        'In-depth tutorials on popular frameworks like React and Angular, designed to help you get started and build robust applications.',
      date: 'October 20, 2024',
      link: '/blog/tutorials-frameworks-libraries',
      image: '/myIMG.jpg' // Update this path to your image
    },
    {
      title: 'Insights into Development Tools and Methodologies',
      description:
        'Learn about the latest tools and methodologies that streamline the development process and enhance productivity.',
      date: 'October 15, 2024',
      link: '/blog/insights-development-tools',
      image: '/myIMG.jpg' // Update this path to your image
    }
  ]

  return (
    <section className="h-auto bg-my-color-2">
      <div className="max-w-8xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-my-color-4 mb-8">
          Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <MotionDiv
              key={index}
              className="bg-my-color-4 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }} // Adds 3D tilt on hover
              initial={{ opacity: 0, y: 20 }} // Entrance animation
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  <Link href={blog.link} className="hover:text-blue-600">
                    {blog.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-2">{blog.description}</p>
                <span className="text-gray-500 text-sm">{blog.date}</span>
                <div className="mt-4">
                  <Link href={blog.link}>
                    <button className="px-4 py-2 mt-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                      Read
                    </button>
                  </Link>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Modified More Blogs Button */}
        <div className="text-center mt-8">
          <Button
            href="/blogs"
            text="More Blogs"
            className="px-6 py-3 text-lg font-semibold text-my-color-2 bg-my-color-4 rounded-lg transition duration-200 hover:bg-my-color-5"
          />
        </div>
      </div>
    </section>
  )
}

export default BlogPage
