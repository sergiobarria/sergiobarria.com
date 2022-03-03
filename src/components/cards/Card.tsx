import React from 'react';

import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: Props) {
  return (
    <article className={clsx('rounded-md border p-4', className)}>
      {children}
    </article>
  );
}
