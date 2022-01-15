import { PropsWithChildren } from 'react';

import clsx from 'clsx';

import Layout from './Layout';
import { Snippet } from '.contentlayer/types';

export default function SnippetLayout({
  children,
  snippet,
}: PropsWithChildren<{ snippet: Snippet }>) {
  const customMetadata = {
    url: 'htpps://sergiobarria.com',
    title: 'Library | Sergio Barria',
  };

  return (
    <Layout customMetadata={customMetadata}>
      <div className='my-10 layout'>
        <h1 className='mb-4'>{snippet.title}</h1>
        <p className='mb-6 text-gray-regular dark:text-gray-lighter'>
          {snippet.description}
        </p>

        <section
          className={clsx(
            'prose max-w-none dark:prose-invert prose-li:marker:text-green-400',
            'prose-li:marker:text-lg prose-a:no-underline'
          )}
        >
          {children}
        </section>
      </div>
    </Layout>
  );
}
