export interface Repo {
  id: number;
  name: string;
  stargazers_count: number;
  forks_count: number;
  watchers: number;
  open_issues: number;
  html_url: string;
  description: string;
}

export type LanguageUsage = { [language: string]: number };

export async function getGithubData(
  options: { includeLanguages?: boolean } = {}
) {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn('GitHub token not configured, returning empty list.');
    return { repos: [], languages: {} };
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  let allRepos: Repo[] = [];
  let page = 1;

  try {
    while (true) {
      const response = await fetch(
        `https://api.github.com/users/prasenjitpriyan/repos?per_page=100&page=${page}`,
        {
          headers,
          next: { revalidate: 3600 }, // Cache for 1 hour
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
      }

      const data: Repo[] = await response.json();

      if (data.length === 0) break;
      allRepos = [...allRepos, ...data];
      page++;
    }

    // Sort by "best" (most stars) first, then by newest (highest ID)
    const sortedRepos = allRepos.sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return b.id - a.id;
    });

    // Fetch languages directly in parallel (ONLY if requested)
    const languageStats: LanguageUsage = {};

    if (options.includeLanguages) {
      const languagePromises = allRepos.map(async (repo) => {
        try {
          const langResponse = await fetch(
            `https://api.github.com/repos/prasenjitpriyan/${repo.name}/languages`,
            {
              headers,
              next: { revalidate: 3600 },
            }
          );

          if (!langResponse.ok) return {};

          return langResponse.json() as Promise<LanguageUsage>;
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
    }

    return {
      repos: sortedRepos,
      languages: languageStats,
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return { repos: [], languages: {} };
  }
}
