import clsx from 'clsx';
import { SiGithub } from 'react-icons/si';

import { IGithubRepoGQL } from '@/types/interfaces';

interface IProps {
  repo: IGithubRepoGQL;
}

export default function GithubCard({ repo }: IProps) {
  return (
    <div
      className={clsx(
        'px-4 py-2 transition-all duration-300 border rounded-md',
        'hover:scale-105 hover:shadow-md'
      )}
    >
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={repo.url}
        className='flex flex-col h-full'
      >
        <h4 className='flex items-center space-x-3'>
          <span>
            <SiGithub />
          </span>
          <span className='bg-text-gradient'>{repo.name}</span>
        </h4>
        <p className='py-2 text-sm text-gray-regular dark:text-gray-lighter'>
          {repo.description}
        </p>
        <div className='flex items-center mt-auto space-x-2'>
          <div
            className={`w-2 h-2 ${repo.primaryLanguage.name.toLowerCase()} rounded-full`}
          />
          <span className='text-sm text-gray-regular dark:text-gray-lighter'>
            {repo.primaryLanguage.name}
          </span>
        </div>
      </a>
    </div>
  );
}
