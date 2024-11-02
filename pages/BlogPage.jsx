import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    <section className="min-h-screen bg-my-color-2 p-6 sm:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-my-color-4 mb-8">
          Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-my-color-4 rounded-lg shadow-lg overflow-hidden"
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
              </div>
            </div>
          ))}
        </div>

        {/* More Blogs Button */}
        <div className="text-center mt-8">
          <Link
            href="/blog" // Change this to your actual blog listing page
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            More Blogs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPage
