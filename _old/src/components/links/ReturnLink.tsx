import React from 'react';

import Link from 'next/link';

import clsx from 'clsx';
import { IoChevronBackCircleSharp } from 'react-icons/io5';

export default function ReturnLink({ href }: { href: string }) {
  return (
    <Link href={href}>
      <a
        className={clsx(
          'mb-3 flex self-start text-primary transition-colors',
          'hover:text-primary/70'
        )}
      >
        <IoChevronBackCircleSharp size={30} className='mr-2 ' />
        <span className='border-b-[2px] border-dotted border-primary/50'>
          Back
        </span>
      </a>
    </Link>
  );
}
