import clsx from 'clsx';
import { SiGithub } from 'react-icons/si';

import { GithubRepoGQL } from '@/types';

interface Props {
  repo: GithubRepoGQL;
}

export default function GithubCard({ repo }: Props) {
  return (
    <div
      className={clsx(
        'h-full rounded-md border px-4 py-2 transition-all duration-300',
        'hover:scale-105 hover:border-primary hover:shadow-md'
      )}
    >
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={repo.url}
        className='flex h-full flex-col'
      >
        <h4 className='flex items-center space-x-3'>
          <span>
            <SiGithub />
          </span>
          <span className='bg-text-gradient'>{repo.name}</span>
        </h4>
        <p className='py-2 text-sm text-gray-500 dark:text-gray-300'>
          {repo.description}
        </p>
        <div className='mt-auto flex items-center space-x-2'>
          <div
            className={`h-2 w-2 ${repo.primaryLanguage.name.toLowerCase()} rounded-full`}
          />
          <span className='text-sm text-gray-500 dark:text-gray-300'>
            {repo.primaryLanguage.name}
          </span>
        </div>
      </a>
    </div>
  );
}
