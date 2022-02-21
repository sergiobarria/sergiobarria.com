import React from 'react';

import Link from 'next/link';

import clsx from 'clsx';
import { Snippet } from 'contentlayer/generated';

import TechIcons, { TechListType } from '../TechIcons';

export default function SnippetCard({ snippet }: { snippet: Snippet }) {
  return (
    <Link href={`library/${snippet.slug}`}>
      <a
        className={clsx(
          'space-y-2 rounded-md border p-3 transition duration-200',
          'hover:scale-[1.02] hover:border-2 hover:border-primary hover:shadow-md'
        )}
      >
        <h4 className='mb-2'>{snippet.title}</h4>
        <div>
          <TechIcons
            techs={snippet.tags.split(',') as Array<TechListType>}
            className='text-gray-500'
          />
        </div>
        <p className='text-sm text-gray-500 dark:text-gray-300'>
          {snippet.description}
        </p>
      </a>
    </Link>
  );
}
