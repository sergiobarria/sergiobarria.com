import cn from 'classnames'

import ExternalIcons from './ExternalIcons'

import { IProject } from '@/types/ProjectTypes'

export default function CustomProjectCard({
  name,
  description,
  liveUrl,
  repo,
  framework,
}: IProject) {
  return (
    <article
      className={cn(
        'flex flex-col h-full justify-between p-4 bg-white rounded-lg',
        'transition hover:scale-[1.01] hover:ring-1',
        `ring-${framework?.toLowerCase()} dark:bg-gray-700 hover:shadow-md`
      )}
    >
      <h4 className="mb-3 heading-4">{name}</h4>
      <p className="text-base long-text ">{description.substring(0, 125)}...</p>
      <div className="flex items-center justify-between mt-4">
        <ExternalIcons repoUrl={repo} liveUrl={liveUrl} />
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 ${framework?.toLowerCase()} rounded-full`} />
          <span className="text-sm text-gray-600 dark:text-gray-200">
            {framework || 'JavaScript'}
          </span>
        </div>
      </div>
    </article>
  )
}
