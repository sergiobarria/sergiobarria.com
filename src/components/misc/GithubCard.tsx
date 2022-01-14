import clsx from 'clsx'
import { SiGithub } from 'react-icons/si'
import useSWR from 'swr'

// interface IGithubRepo {
//   id: string
//   name: string
//   description: string
//   url: string
//   homepageUrl: string
//   primaryLanguage: {
//     id: string
//     name: string
//     color: string
//   }
// }

interface IGithubRepo {
  full_name: string
  description: string
  html_url: string
  homepage: string
  language: string
}

interface IProps {
  repo: IGithubRepo
}

export default function GithubCard({ repo }: IProps) {
  const { data: repository, error } = useSWR<IGithubRepo>(
    `https://api.github.com/repos/sergiobarria/${repo}`
  )

  return !error && repository ? (
    <div
      className={clsx(
        'px-4 py-2 transition-all duration-300 border rounded-md',
        'hover:scale-105 hover:shadow-md'
      )}
    >
      <a href={repository?.html_url} className="flex flex-col h-full">
        <h4 className="flex items-center space-x-3">
          <span>
            <SiGithub />
          </span>
          <span>{repository?.full_name}</span>
        </h4>
        <p className="py-2 text-sm text-gray-regular dark:text-gray-lighter">
          {repository?.description}
        </p>
        <div className="flex items-center mt-auto space-x-2">
          <div
            className={`w-2 h-2 ${repository?.language.toLowerCase()} rounded-full`}
          />
          <span className="text-sm text-gray-regular dark:text-gray-lighter">
            {repository?.language}
          </span>
        </div>
      </a>
    </div>
  ) : (
    <div
      className={clsx(
        'mx-auto max-w-xl !block',
        'not-prose px-4 py-3',
        'rounded-lg border border-gray-300 dark:border-gray-600',
        'bg-gray-300 animate-pulse dark:bg-gray-600',
        'h-[110px] animate-pulse'
      )}
    />
  )
}
