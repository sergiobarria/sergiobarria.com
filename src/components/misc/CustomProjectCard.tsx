import ExternalIcons from './ExternalIcons'
import { IProject } from '@/types/interfaces'

export default function CustomProjectCard({
  projectName,
  description,
  liveUrl,
  repositoryUrl,
  techStack,
  mainTechnology,
}: IProject) {
  return (
    <article
      className={`flex flex-col justify-between h-full p-4 bg-white rounded-lg transition hover:scale-[1.01] hover:ring-1 ring-${mainTechnology?.toLowerCase()} dark:bg-gray-700 hover:shadow-md`}
    >
      <h4 className="mb-3 heading-4">{projectName}</h4>
      <p className="long-text">{description.substring(0, 100)}...</p>
      <div className="flex items-center justify-between mt-4">
        <ExternalIcons repoUrl={repositoryUrl} liveUrl={liveUrl} />
        <div className="flex items-center space-x-2">
          <div
            className={`w-2 h-2 ${mainTechnology?.toLowerCase()} rounded-full`}
          />
          <span className="text-sm text-gray-600 dark:text-gray-200">
            {mainTechnology || 'JavaScript'}
          </span>
        </div>
      </div>
    </article>
  )
}
