import NextLink from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

export default function CustomProjectCard() {
  return (
    <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg transition hover:scale-[1.01] hover:ring-1 dark:bg-gray-700">
      <h4 className="mb-3 heading-4">Project title</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        officiis.
      </p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 rounded-lg hover:bg-gray-200"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 rounded-lg hover:bg-gray-200"
          >
            <BiLinkExternal className="w-5 h-5" />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-black rounded-full" />
          <span className="text-sm text-gray-600 dark:text-gray-200">
            JavaScript
          </span>
        </div>
      </div>
    </div>
  )
}
