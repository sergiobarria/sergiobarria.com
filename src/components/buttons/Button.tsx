import React, { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button(props: Props) {
  const { children, className, ...rest } = props;

  return (
    <button
      type='submit'
      {...rest}
      className={clsx(
        'rounded bg-primary px-4 py-2 font-bold text-white shadow',
        'transition duration-300 hover:scale-105 hover:shadow-lg focus:outline-none',
        'flex items-center space-x-6'
      )}
    >
      {children}
    </button>
  );
}
