import { PropsWithChildren } from 'react';

import { NextSeo } from 'next-seo';

import clsx from 'clsx';

import { Snippet } from '.contentlayer/types';

export default function SnippetLayout({
  children,
  snippet,
}: PropsWithChildren<{ snippet: Snippet }>) {
  const customMetadata = {
    title: 'Library',
    canonical: `htpps://sergiobarria.com/library/${snippet.slug}`,
    openGraph: {
      url: `https://sergiobarria.com/library/${snippet.slug}`,
      type: 'article',
    },
    additionalMetaTags: [
      {
        ...(((snippet.tags ?? undefined) && {
          name: 'keywords',
          content: snippet.tags.replace(/,/g, ', '),
        }) as any),
      },
    ],
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      <div className='my-10 layout'>
        <h1 className='mb-4'>{snippet.title}</h1>
        <p className='mb-6 text-gray-500 dark:text-gray-300'>
          {snippet.description}
        </p>

        <section
          className={clsx(
            'prose max-w-none dark:prose-invert prose-li:marker:text-primary',
            'prose-li:marker:text-lg prose-a:no-underline'
          )}
        >
          {children}
        </section>
      </div>
    </>
  );
}
