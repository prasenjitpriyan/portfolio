import React from 'react'
import Certificate from '@/components/Certificate'

const CertificatesShowcasePage = () => {
  const certificates = [
    {
      title: 'Certified JavaScript Developer',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Achieved certification in JavaScript development.',
      date: 'July 2024'
    },
    {
      title: 'TypeScript Mastery',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Mastered TypeScript for web development.',
      date: 'August 2024'
    },
    {
      title: 'React Professional Certification',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Professional certification in React development.',
      date: 'September 2024'
    },
    {
      title: 'Certified JavaScript Developer',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Achieved certification in JavaScript development.',
      date: 'July 2024'
    },
    {
      title: 'TypeScript Mastery',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Mastered TypeScript for web development.',
      date: 'August 2024'
    },
    {
      title: 'React Professional Certification',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Professional certification in React development.',
      date: 'September 2024'
    },
    {
      title: 'Certified JavaScript Developer',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Achieved certification in JavaScript development.',
      date: 'July 2024'
    },
    {
      title: 'TypeScript Mastery',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Mastered TypeScript for web development.',
      date: 'August 2024'
    },
    {
      title: 'React Professional Certification',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Professional certification in React development.',
      date: 'September 2024'
    },
    {
      title: 'Certified JavaScript Developer',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Achieved certification in JavaScript development.',
      date: 'July 2024'
    },
    {
      title: 'TypeScript Mastery',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Mastered TypeScript for web development.',
      date: 'August 2024'
    },
    {
      title: 'React Professional Certification',
      image: '/myIMG.jpg', // Replace with your image path
      description: 'Professional certification in React development.',
      date: 'September 2024'
    }
    // Add more certificates as needed
  ]

  return (
    <section className="min-h-screen bg-my-color-2 p-8">
      <h1 className="text-4xl font-bold text-center text-my-color-4 mb-8">
        My Achievements
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <Certificate
            key={index}
            title={cert.title}
            image={cert.image}
            description={cert.description}
            date={cert.date}
          />
        ))}
      </div>
    </section>
  )
}

export default CertificatesShowcasePage
