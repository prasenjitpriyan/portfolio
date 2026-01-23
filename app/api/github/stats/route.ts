import axios from 'axios';
import { NextResponse } from 'next/server';

interface Repo {
  id: number;
  name: string;
  stargazers_count: number;
  forks_count: number;
  watchers: number;
  open_issues: number;
}

type LanguageUsage = { [language: string]: number };

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
    };

    // 1. Fetch all repos (pagination handled for up to 100 for now, can loop if needed)
    // Note: User likely has < 100 repos. If > 100, we'd need a loop.
    // Assuming < 100 for simplicity as per original code logic usually implies.
    // But original code DID loop. Let's implement a loop to be safe.

    let allRepos: Repo[] = [];
    let page = 1;

    while (true) {
      const response = await axios.get<Repo[]>(
        'https://api.github.com/users/prasenjitpriyan/repos',
        {
          headers,
          params: { per_page: 100, page },
        }
      );

      if (response.data.length === 0) break;
      allRepos = [...allRepos, ...response.data];
      page++;
    }

    // 2. Fetch languages directly in parallel
    const languageStats: LanguageUsage = {};

    // Use Promise.all to fetch languages for all repos in parallel
    const languagePromises = allRepos.map(async (repo) => {
      try {
        const langResponse = await axios.get<LanguageUsage>(
          `https://api.github.com/repos/prasenjitpriyan/${repo.name}/languages`,
          {
            headers,
          }
        );
        return langResponse.data;
      } catch (error) {
        console.error(`Failed to fetch languages for ${repo.name}`, error);
        return {};
      }
    });

    const results = await Promise.all(languagePromises);

    results.forEach((repoLanguages) => {
      for (const [language, bytes] of Object.entries(repoLanguages)) {
        languageStats[language] =
          (languageStats[language] || 0) + (bytes as number);
      }
    });

    return NextResponse.json({
      repos: allRepos,
      languages: languageStats,
    });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred';
    let statusCode = 500;

    if (axios.isAxiosError(error)) {
      errorMessage = error.message;
      statusCode = error.response?.status || 500;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('GitHub Stats API Error:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
