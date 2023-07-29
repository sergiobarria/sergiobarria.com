import { useState } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { pick } from 'contentlayer/client';
import { allSnippets, Snippet } from 'contentlayer/generated';

import { Main } from '@/components/base';
import SnippetCard from '@/components/cards/SnippetCard';
import SearchBar from '@/components/forms/SearchBar';
import { H1, Paragraph } from '@/components/Typography';

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
      <Main>
        <section className='section'>
          <H1>My Library</H1>
          <Paragraph className='my-4'>
            This is a collection of some code snippets, that I use on my
            projects. It includes stuff like styles, functions, and others.
          </Paragraph>
          <SearchBar
            placeholderText='Search Snippet'
            setSearchValue={setSearchValue}
          />
        </section>

        <section className='section mb-8'>
          {!filteredSnippets.length && (
            <Paragraph className='mt-2'>No snippets found...</Paragraph>
          )}

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {filteredSnippets.map((snippet: Snippet, index: number) => (
              <SnippetCard key={index} snippet={snippet} />
            ))}
          </div>
        </section>
      </Main>
    </>
  );
}
