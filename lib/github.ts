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

let isTokenValid = true;

export async function getGithubData(
  options: { includeLanguages?: boolean } = {}
) {
  const token = isTokenValid ? process.env.GITHUB_TOKEN : undefined;

  const fetchWithFallback = async (url: string) => {
    if (token) {
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
          },
          next: { revalidate: 3600 },
        });
        if (res.ok) return res;
        if (res.status === 401) {
          console.warn('GitHub token returned 401 Unauthorized, disabling token and falling back to unauthenticated request.');
          isTokenValid = false;
        } else {
          console.warn(`GitHub API request with token returned status ${res.status}, falling back.`);
        }
      } catch (err) {
        console.error('Error fetching with token, falling back to unauthenticated:', err);
      }
    }

    return fetch(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 },
    });
  };

  let allRepos: Repo[] = [];
  let page = 1;

  try {
    while (true) {
      const response = await fetchWithFallback(
        `https://api.github.com/users/prasenjitpriyan/repos?per_page=100&page=${page}`
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText} (${response.status})`);
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
      // Limit to top 15 repositories to prevent hitting GitHub rate limits (especially when unauthenticated)
      const reposToFetch = sortedRepos.slice(0, 15);
      const languagePromises = reposToFetch.map(async (repo) => {
        try {
          const langResponse = await fetchWithFallback(
            `https://api.github.com/repos/prasenjitpriyan/${repo.name}/languages`
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
