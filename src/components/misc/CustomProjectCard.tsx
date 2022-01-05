import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

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
    <div
      className={`flex flex-col justify-between h-full p-4 bg-white rounded-lg transition hover:scale-[1.01] hover:ring-1 ring-${mainTechnology?.toLowerCase()} dark:bg-gray-700`}
    >
      <h4 className="mb-3 heading-4">{projectName}</h4>
      <p>{description.substring(0, 100)}...</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 rounded-lg hover:bg-gray-200"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 rounded-lg hover:bg-gray-200"
          >
            <BiLinkExternal className="w-5 h-5" />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className={`w-2 h-2 ${mainTechnology?.toLowerCase()} rounded-full`}
          />
          <span className="text-sm text-gray-600 dark:text-gray-200">
            {mainTechnology || 'JavaScript'}
          </span>
        </div>
      </div>
    </div>
  )
}
