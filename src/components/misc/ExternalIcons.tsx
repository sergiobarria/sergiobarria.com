import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

interface IProps {
  repoUrl: string
  liveUrl?: string
}

export default function ExternalIcons({ repoUrl, liveUrl }: IProps) {
  return (
    <div className="flex items-center space-x-4">
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg hover:bg-gray-200 "
      >
        <FaGithub className="w-6 h-6 text-gray-500 dark:text-gray-300 " />
      </a>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-gray-200"
        >
          <BiLinkExternal className="w-6 h-6 text-gray-500 dark:text-gray-300" />
        </a>
      )}
    </div>
  )
}
