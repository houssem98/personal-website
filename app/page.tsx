import { getAllUserRepos } from '@/lib/github';

interface Repo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

const LANG_COLORS: { [key: string]: string } = {
  'Python': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'TypeScript': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'JavaScript': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  'Solidity': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  'Java': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  'Go': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
  'Rust': 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
};

const getLangColor = (lang: string) => LANG_COLORS[lang] || 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';

export default async function Home() {
  const repos = await getAllUserRepos('houssem98');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold text-lg">houssem98</div>
          <div className="flex gap-6">
            <a href="#hero" className="text-sm hover:text-gray-600">Hero</a>
            <a href="#projects" className="text-sm hover:text-gray-600">Projects</a>
            <a href="https://github.com/houssem98" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-600">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Market Intelligence at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Scale</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Building AlphaGravity — AI-powered financial research, deep market analysis, and trading systems for institutional investors.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/houssem98/AlphaGravity" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              View AlphaGravity →
            </a>
            <a href="mailto:houssemzitoub@gmail.com" className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 font-medium">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">All Projects ({repos.length})</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Sorted by stars. Fetched live from GitHub API.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo: Repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-400 transition"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 truncate">{repo.name}</h3>
                  {repo.stars > 0 && (
                    <span className="text-xs text-yellow-600 dark:text-yellow-400 font-bold whitespace-nowrap ml-2">⭐ {repo.stars}</span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs rounded font-medium ${getLangColor(repo.language)}`}>
                    {repo.language}
                  </span>
                  {repo.forks > 0 && (
                    <span className="text-xs text-gray-500">🔀 {repo.forks}</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">{repos.length}</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Projects</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{repos.reduce((sum, r) => sum + r.stars, 0)}</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Total Stars</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{repos.reduce((sum, r) => sum + r.forks, 0)}</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Total Forks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Building the future of market intelligence</h2>
          <p className="mb-8 text-lg opacity-90">
            Join the research. Follow on GitHub, or reach out to discuss partnerships.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/houssem98" className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100">
              GitHub Profile
            </a>
            <a href="mailto:houssemzitoub@gmail.com" className="px-6 py-2 border border-white rounded-lg font-medium hover:bg-white/10">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800">
        <p>© 2026 houssem98. All rights reserved.</p>
      </footer>
    </main>
  );
}
