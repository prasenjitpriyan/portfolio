import React from 'react'

const AboutTable: React.FC = () => {
  const creativeDesign = [
    'Figma',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign',
    'Adobe XD',
    'Adobe After Effects'
  ]

  const webDevelopment = {
    languages: [
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'TypeScript',
      'GraphQL',
      'MongoDB'
    ],
    frameworks: [
      'React JS',
      'Node JS / Express JS',
      'React Native',
      'Redux',
      'Firebase',
      'Webpack'
    ],
    tools: ['Git', 'NPM', 'Yarn', 'Gulp', 'Grunt', '-']
  }

  return (
    <div className="max-w-4xl">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th
                className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-gray-700"
                rowSpan={2}
              >
                Creative Design
              </th>
              <th
                className="border border-gray-300 bg-gray-100 px-4 py-2 text-center text-gray-700"
                colSpan={3}
              >
                Web Development
              </th>
            </tr>
            <tr>
              <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-gray-700">
                Languages
              </th>
              <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-gray-700">
                Frameworks
              </th>
              <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-gray-700">
                Tools
              </th>
            </tr>
          </thead>
          <tbody>
            {creativeDesign.map((design, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{design}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {webDevelopment.languages[index] || ''}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {webDevelopment.frameworks[index] || ''}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {webDevelopment.tools[index] || ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AboutTable
