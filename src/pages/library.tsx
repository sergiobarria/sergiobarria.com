import { useState } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { pick } from 'contentlayer/client';

import SearchBar from '@/components/SearchBar';
import SnippetCard from '@/components/SnippetCard';

import { allSnippets } from '.contentlayer/data';
import { Snippet } from '.contentlayer/types';

export async function getStaticProps() {
  const snippets = allSnippets.map((snippet) =>
    pick(snippet, ['slug', 'title', 'tags', 'description'])
  );

  return {
    props: {
      snippets,
    },
  };
}

export default function LibraryPage({
  snippets,
}: InferGetStaticPropsType<GetStaticProps>) {
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredSnippets = snippets.filter((snippet: Snippet) =>
    snippet.title.includes(searchValue)
  );

  const customMetadata = {
    title: 'Library',
    canonical: 'https://sergiobarria.com/library',
    openGraph: {
      url: 'https://sergiobarria.com/library',
    },
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      <div className='layout'>
        <section className='section'>
          <h1>My Library</h1>
          <p className='my-4 text-long'>
            This is a collection of some code snippets, that I use on my
            projects. It includes stuff like styles, functions, and others.
          </p>
          <SearchBar
            placeholderText='Search Snippet'
            setSearchValue={setSearchValue}
          />
        </section>

        <section className='mb-8 section'>
          {!filteredSnippets.length && (
            <p className='mt-2 text-gray-500 dark:text-gray-300'>
              No snippets found...
            </p>
          )}

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {filteredSnippets.map((snippet: Snippet, index: number) => (
              <SnippetCard key={index} snippet={snippet} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
