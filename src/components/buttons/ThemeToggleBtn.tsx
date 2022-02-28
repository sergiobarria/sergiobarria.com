import React from 'react';

import { Switch } from '@headlessui/react';
import clsx from 'clsx';

import { useAppTheme } from '@/hooks/useAppTheme';

export default function ThemeToggleBtn() {
  const { currentTheme, setTheme } = useAppTheme();

  return (
    <Switch
      checked={currentTheme === 'dark'}
      onChange={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className={clsx(
        currentTheme === 'dark' ? 'bg-primary' : 'bg-gray-400',
        'relative inline-flex h-6 w-11 items-center rounded-full'
      )}
    >
      <span className='sr-only'>Toggle theme mode</span>
      <span
        className={clsx(
          currentTheme === 'dark' ? 'translate-x-6' : 'translate-x-1',
          'inline-block h-4 w-4 transform rounded-full bg-white',
          'transition duration-200 ease-in-out'
        )}
      />
    </Switch>
  );
}
