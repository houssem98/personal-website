export default function Home() {
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
          <h2 className="text-3xl font-bold mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://github.com/houssem98/AlphaGravity" className="group p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">AlphaGravity</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                AI-powered financial research engine. 500K+ filings indexed, real-time market analysis, deep research workflows.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">TypeScript</span>
              </div>
            </a>

            <a href="https://github.com/houssem98" className="group p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Trading Agents</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Autonomous agents for market analysis and trade execution. Multi-model coordination.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Python</span>
              </div>
            </a>

            <a href="https://github.com/houssem98" className="group p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Hermes Daemon</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Self-hosted trading research daemon. Real-time alerts, dividend tracking, briefings.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded">Docker</span>
              </div>
            </a>

            <a href="https://github.com/houssem98" className="group p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">TrustGrid</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                On-chain data verification dashboard. Grid trust scoring, source validation.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded">TypeScript</span>
              </div>
            </a>
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
