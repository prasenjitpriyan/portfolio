'use client';

import axios from 'axios';
import {
  ArcElement,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip,
} from 'chart.js';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers: number;
  open_issues: number;
}

type LanguageUsage = { [language: string]: number };

const AboutGithub: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [languages, setLanguages] = useState<LanguageUsage>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await axios.get('/api/github/stats');
        const { repos, languages } = response.data;

        setRepos(repos);
        setLanguages(languages);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70svh] w-full overflow-hidden bg-ghost-white text-jet-black flex px-20 py-20 justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[70svh] w-full overflow-hidden bg-ghost-white text-jet-black flex px-20 py-20 justify-center items-center">
        {error}
      </div>
    );
  }

  const chartData = {
    labels: Object.keys(languages),
    datasets: [
      {
        label: 'Languages Used',
        data: Object.values(languages),
        backgroundColor: [
          '#222831',
          '#323330',
          '#4F4F4F',
          '#696969',
          '#808080',
          '#A9A9A9',
        ],
        hoverBackgroundColor: [
          '#222831',
          '#323330',
          '#4F4F4F',
          '#696969',
          '#808080',
          '#A9A9A9',
        ],
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="min-h-[70svh] w-full overflow-hidden bg-ghost-white text-jet-black flex flex-wrap px-20 py-20">
      {/* Left Grid */}
      <motion.div
        className="w-full h-1/6 md:w-1/3 p-4 md:h-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="flex gap-12">
          <p className="font-thin">/ 02 -</p>
          <p className="font-thin">GITHUB</p>
        </div>
      </motion.div>
      {/* Right Grid */}
      <motion.div
        className="w-full h-5/6 md:w-2/3 p-4 md:h-full"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="flex flex-col justify-between md:flex-row items-center md:items-start">
          {/* GitHub Stats */}
          <div className="pb-4 text-center">
            <h2 className="text-2xl font-semibold text-jet-black capitalize">
              GitHub Stats
            </h2>
            <p className="pt-2 text-jet-black">
              Total Repositories: {repos.length}
            </p>
            <p className="pt-1 text-jet-black">
              Total Stars:{' '}
              {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
            </p>
            <p className="pt-1 text-jet-black">
              Total Forks:{' '}
              {repos.reduce((acc, repo) => acc + repo.forks_count, 0)}
            </p>
            <p className="pt-1 text-jet-black">
              Total Watchers:{' '}
              {repos.reduce((acc, repo) => acc + repo.watchers, 0)}
            </p>
            <p className="pt-1 text-jet-black">
              Total Open Issues:{' '}
              {repos.reduce((acc, repo) => acc + repo.open_issues, 0)}
            </p>
            <p className="pt-1 text-jet-black">
              Top Starred Repo:
              {repos.length > 0
                ? repos.reduce((prev, current) =>
                    prev.stargazers_count > current.stargazers_count
                      ? prev
                      : current
                  ).name
                : 'N/A'}
            </p>
            <p className="pt-1 text-jet-black">
              Avg Stars per Repo:{' '}
              {repos.length > 0
                ? (
                    repos.reduce(
                      (acc, repo) => acc + repo.stargazers_count,
                      0
                    ) / repos.length
                  ).toFixed(2)
                : 0}
            </p>
            <p className="pt-1 text-jet-black">
              Avg Forks per Repo:{' '}
              {repos.length > 0
                ? (
                    repos.reduce((acc, repo) => acc + repo.forks_count, 0) /
                    repos.length
                  ).toFixed(2)
                : 0}
            </p>
          </div>

          {/* Most Used Languages */}
          <div className="w-96 h-96">
            <h2 className="text-2xl font-semibold text-gray-800 text-center pb-2">
              Most Used Languages
            </h2>
            <Pie data={chartData} options={options} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutGithub;
