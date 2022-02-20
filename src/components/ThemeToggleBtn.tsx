import React from 'react';

import clsx from 'clsx';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useSetTheme } from '@/hooks/useSetTheme';

export default function ThemeToggleBtn() {
  const { currentTheme, setTheme } = useSetTheme();

  return (
    <button
      className={clsx(
        'rounded-md p-2 focus:outline-none',
        'border dark:border-gray-500',
        'hover:text-gray-700, hover:border-gray-700',
        'dark:hover:border-gray-200',
        'transition-all duration-200 ease-in-out',
        'ml-auto sm:ml-0'
      )}
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      {currentTheme === 'light' ? (
        <FiMoon
          size={20}
          className='text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200'
        />
      ) : (
        <FiSun
          size={20}
          className='text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200'
        />
      )}
    </button>
  );
}
