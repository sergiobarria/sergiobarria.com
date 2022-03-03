import React from 'react';

import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
}

export function Main({ children }: Props) {
  return (
    <main
      id='skip'
      className={clsx(
        'mx-auto flex w-full max-w-3xl flex-col',
        'bg-gray-50 px-6 dark:bg-gray-900 md:px-0'
      )}
    >
      {children}
    </main>
  );
}
