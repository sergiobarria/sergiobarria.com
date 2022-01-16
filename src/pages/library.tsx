import { useState } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { pick } from 'contentlayer/client';

import Layout from '@/components/layout-main/Layout';
import SearchBar from '@/components/SearchBar';
import TechIcons, { TechListType } from '@/components/TechIcons';

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
    url: 'https://sergiobarria.com/library',
    title: 'Library | Sergio Barria',
  };

  return (
    <Layout customMetadata={customMetadata}>
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
              <div
                key={index}
                className='p-3 transition duration-200 border rounded-md hover:scale-[1.03] hover:shadow-md'
              >
                <a href={`library/${snippet.slug}`} className='space-y-2'>
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
