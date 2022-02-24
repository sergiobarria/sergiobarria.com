import React from 'react';

import clsx from 'clsx';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useAppTheme } from '@/hooks/useAppTheme';

export default function ThemeToggleBtn() {
  const { currentTheme, setTheme } = useAppTheme();

  return (
    <button
      className={clsx(
        'rounded-md p-2 transition-colors duration-150 focus:outline-none',
        'border dark:border-gray-600',
        'hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary',
        'focus-visible:border-primary focus-visible:text-primary dark:focus-visible:border-primary dark:focus-visible:text-primary'
      )}
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      {currentTheme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}
