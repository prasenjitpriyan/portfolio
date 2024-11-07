'use client'

import React, { useState } from 'react'
import { FaCalendarAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('education')

  const educationData = [
    {
      date: 'July 2009 - July 2012',
      title: 'Graduation in Web Development',
      institution: 'Web Development Institute, Berlin'
    },
    {
      date: 'July 2009 - July 2012',
      title: 'Graduation in Web Development',
      institution: 'Web Development Institute, Berlin'
    },
    {
      date: 'July 2009 - July 2012',
      title: 'Graduation in Web Development',
      institution: 'Web Development Institute, Berlin'
    }
  ]

  const workData = [
    {
      date: 'July 2013 - July 2022',
      title: 'Working as a Web Developer',
      company: 'Creative Labs'
    },
    {
      date: 'July 2013 - July 2022',
      title: 'Working as a Web Developer',
      company: 'Creative Labs'
    },
    {
      date: 'July 2013 - July 2022',
      title: 'Working as a Web Developer',
      company: 'Creative Labs'
    }
  ]

  const renderTimelineItems = (data, type) => {
    return data.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`flex items-center p-6 my-4 rounded-lg border ${
          type === 'education' ? 'border-purple-400' : 'border-blue-400'
        }`}
      >
        <div className="flex items-center text-gray-600">
          <FaCalendarAlt className="mr-2" />
          <span>{item.date}</span>
        </div>
        <div className="ml-6">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-purple-600">
            {type === 'education' ? (
              <>
                <FaGraduationCap className="inline mr-2" />
                {item.institution}
              </>
            ) : (
              <>
                <FaBriefcase className="inline mr-2" />
                {item.company}
              </>
            )}
          </p>
        </div>
      </motion.div>
    ))
  }

  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2">My Experience</h2>
        <p className="text-yellow-500 mb-10">Timeline</p>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('education')}
          className={`px-6 py-2 font-semibold rounded-full ${
            activeTab === 'education'
              ? 'bg-purple-400 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          My Education
        </button>
        <button
          onClick={() => setActiveTab('work')}
          className={`px-6 py-2 font-semibold rounded-full ${
            activeTab === 'work'
              ? 'bg-blue-400 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          Work Experience
        </button>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          {activeTab === 'education' &&
            renderTimelineItems(educationData, 'education')}
        </div>
        <div>
          {activeTab === 'work' && renderTimelineItems(workData, 'work')}
        </div>
      </div>
    </section>
  )
}

export default Timeline
