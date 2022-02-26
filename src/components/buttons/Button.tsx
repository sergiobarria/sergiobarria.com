import React, { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading: boolean;
}

export default function Button(props: Props) {
  const { children, className, isLoading, ...rest } = props;

  return (
    <button
      type='submit'
      {...rest}
      className={clsx(
        'rounded bg-primary px-4 py-2 font-bold text-white shadow',
        'transition duration-300 hover:scale-105 hover:shadow-lg focus:outline-none',
        'flex items-center space-x-6',
        isLoading && 'cursor-not-allowed bg-gray-600'
      )}
    >
      {isLoading && (
        <svg
          fill='none'
          className='h-6 w-6 animate-spin'
          viewBox='0 0 32 32'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
            fill='currentColor'
            fillRule='evenodd'
          />
        </svg>
      )}
      {children}
    </button>
  );
}
