import * as React from 'react';

import clsx from 'clsx';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import Tooltip from './Tooltip';

export default function TechStack() {
  return (
    <div className='flex items-center space-x-2 md:space-x-4'>
      {stack.map((tech) => (
        <Tooltip
          key={tech.id}
          content={
            <p className='max-w-xs prose dark:prose-invert'>{tech.tooltip}</p>
          }
        >
          <tech.icon
            key={tech.id}
            className={clsx(
              'w-6 h-6 md:w-8 md:h-8',
              'text-gray-regular dark:hover:text-green-500 dark:text-gray-light',
              'hover:text-green-500 transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stack = [
  {
    id: 1,
    icon: SiNextdotjs,
    tooltip: (
      <>
        <a
          href='https://nextjs.org'
          className='bg-text-gradient'
          target='_blank'
          rel='noopener noreferrer'
        >
          Next.js
        </a>
        , my favorite framework to work with. It give me the flexibility of
        workwing with SSG, SSR or client side React.
      </>
    ),
  },
  {
    id: 2,
    icon: SiTailwindcss,
    tooltip: (
      <>
        <a
          href='https://tailwindcss.com/'
          className='bg-text-gradient'
          target='_blank'
          rel='noopener noreferrer'
        >
          Tailwind CSS
        </a>
        , my go to CSS framework for styling. It helps me with development
        speed, because it allows me to focus more on the business logic, instead
        of worry about styling.
      </>
    ),
  },
  {
    id: 3,
    icon: SiTypescript,
    tooltip: (
      <>
        <a
          href='https://www.typescriptlang.org/'
          className='bg-text-gradient'
          target='_blank'
          rel='noopener noreferrer'
        >
          Next.js
        </a>
        , my favorite framework to work with. It give me the flexibility of
        workwing with SSG, SSR or client side React.
      </>
    ),
  },
  {
    id: 4,
    icon: SiNodedotjs,
    tooltip: (
      <>
        <a
          href='https://nodejs.org/'
          className='bg-text-gradient'
          target='_blank'
          rel='noopener noreferrer'
        >
          Next.js
        </a>
        , my favorite framework to work with. It give me the flexibility of
        workwing with SSG, SSR or client side React.
      </>
    ),
  },
];
