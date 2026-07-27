import { getRepoStats } from '@/lib/github';

interface ProjectCardProps {
  repo: string;
  name: string;
  description: string;
  tags: string[];
  owner: string;
}

export default async function ProjectCard({ repo, name, description, tags, owner }: ProjectCardProps) {
  const stats = await getRepoStats(owner, repo);
  
  return (
    <a href={`https://github.com/${owner}/${repo}`} target="_blank" rel="noopener noreferrer" className="group p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-400 transition">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-semibold group-hover:text-blue-600">{name}</h3>
        {stats && (
          <div className="flex gap-3 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <span>⭐ {stats.stars}</span>
            <span>🔀 {stats.forks}</span>
          </div>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        {description}
      </p>
      <div className="flex gap-2 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
