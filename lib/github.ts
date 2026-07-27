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
    };
  } catch {
    return null;
  }
}
