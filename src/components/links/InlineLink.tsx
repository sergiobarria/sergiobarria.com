import React from 'react';

import clsx from 'clsx';

interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function InlineLink({ href, children }: InlineLinkProps) {
  return (
    <a
      href={href}
      className={clsx(
        'font-semibold text-primary transition duration-300 ease-in-out',
        'hover:text-primary/70'
      )}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
}
