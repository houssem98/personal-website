export async function getRepoStats(owner: string, repo: string) {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
      description: data.description || '',
      url: data.html_url,
      language: data.language || 'Other',
    };
  } catch {
    return null;
  }
}

export async function getAllUserRepos(owner: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${owner}/repos?per_page=100&sort=updated`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const repos = await res.json();
    return repos
      .filter((r: any) => !r.fork)
      .map((r: any) => ({
        name: r.name,
        description: r.description || 'No description',
        stars: r.stargazers_count || 0,
        forks: r.forks_count || 0,
        language: r.language || 'Other',
        url: r.html_url,
      }))
      .sort((a: any, b: any) => b.stars - a.stars);
  } catch {
    return [];
  }
}
