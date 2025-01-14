'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Repo {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  forks_count: number
}

type LanguageUsage = { [language: string]: number }

const AboutGithub: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [languages, setLanguages] = useState<LanguageUsage>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      let allRepos: Repo[] = []
      let page = 1

      try {
        // Fetch paginated repositories
        while (true) {
          const response = await axios.get<Repo[]>(
            `https://api.github.com/users/prasenjitpriyan/repos`,
            {
              params: { per_page: 100, page },
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
              }
            }
          )

          const data = response.data
          if (data.length === 0) break
          allRepos = [...allRepos, ...data]
          page++
        }

        setRepos(allRepos)

        // Fetch language statistics
        const languageStats: LanguageUsage = {}
        await Promise.all(
          allRepos.map(async (repo) => {
            const languageResponse = await axios.get<LanguageUsage>(
              `https://api.github.com/repos/prasenjitpriyan/${repo.name}/languages`,
              {
                headers: {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
                }
              }
            )

            const repoLanguages = languageResponse.data
            for (const [language, bytes] of Object.entries(repoLanguages)) {
              languageStats[language] = (languageStats[language] || 0) + bytes
            }
          })
        )
        setLanguages(languageStats)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-jet-black">
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center textjettext-jet-black">
        {error}
      </div>
    )
  }

  // Data for Pie Chart
  const chartData = {
    labels: Object.keys(languages),
    datasets: [
      {
        label: 'Languages Used',
        data: Object.values(languages),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ]
      }
    ]
  }

  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }

  return (
    <div className="h-screen w-full overflow-hidden bg-ghost-white text-jet-black flex flex-wrap px-20 py-20">
      {/* Left Grid */}
      <div className="w-full h-1/6 md:w-1/3 p-4 md:h-full">
        <div className="flex gap-12">
          <p className="font-thin">/ 02 -</p>
          <p className="font-thin">GITHUB</p>
        </div>
      </div>
      {/* Right Grid */}
      <div className="w-full h-5/6 md:w-2/3 p-4 md:h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* GitHub Stats */}
          <div className="pb-4 text-center">
            <h2 className="text-2xl font-semibold text-jet-black capitalize">
              GitHub Stats
            </h2>
            <p className="mt-2 text-jet-black">
              Total Repositories: {repos.length}
            </p>
            <p className="mt-1 text-jet-black">
              Total Stars:{' '}
              {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
            </p>
            <p className="mt-1 text-jet-black">
              Total Forks:{' '}
              {repos.reduce((acc, repo) => acc + repo.forks_count, 0)}
            </p>
          </div>

          {/* Most Used Languages */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 text-center pb-2">
              Most Used Languages
            </h2>
            <Pie data={chartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutGithub
