import axios from 'axios';

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
    throw new Error('GitHub token not configured');
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  let allRepos: Repo[] = [];
  let page = 1;

  try {
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

    // Sort by "best" (most stars) first, then by newest (highest ID)
    const sortedRepos = allRepos.sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return b.id - a.id;
    });

    // Fetch languages (simplification: if we don't need languages for the Works page,
    // we could skip this part or keep it if it's used elsewhere.
    // The previous API route returned BOTH repos and languages.
    // I will return an object with both to match the API route structure
    // but optimized for direct server use).

    // NOTE: For the Works page, we ONLY need the repos list.
    // But to keep this function versatile (replacing the API route logic),
    // I will fetch languages too.

    // 2. Fetch languages directly in parallel (ONLY if requested)
    // The Works page works better without this heavy operation.
    const languageStats: LanguageUsage = {};

    if (options.includeLanguages) {
      const languagePromises = allRepos.map(async (repo) => {
        try {
          // Add a small delay or concurrency limit here if needed, but for now just try/catch
          const langResponse = await axios.get<LanguageUsage>(
            `https://api.github.com/repos/prasenjitpriyan/${repo.name}/languages`,
            { headers }
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
