import { useState } from 'react';

import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { pick } from 'contentlayer/client';
import { allPosts } from 'contentlayer/generated';

import { Main, Section } from '@/components/base';
import BlogPostCard from '@/components/cards/BlogPostCard';
import FeaturedPostCard from '@/components/cards/FeaturedPostCard';
import SearchBar from '@/components/forms/SearchBar';
import { H1, H2, Paragraph } from '@/components/Typography';

export async function getStaticProps() {
  const featuredPosts = allPosts
    .filter((post) => post.isFeatured)
    .map((post) => pick(post, ['_id', 'slug', 'title', 'readingTime']));
  const posts = allPosts
    .map((post) =>
      pick(post, [
        '_id',
        'slug',
        'title',
        'summary',
        'publishedAt',
        'readingTime',
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return {
    props: {
      featuredPosts,
      posts,
    },
  };
}

export default function BlogPage({
  featuredPosts,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const customMetadata = {
    title: 'Blog',
    canonical: 'https://sergiobarria.com/blog',
    openGraph: {
      url: 'https://sergiobarria.com/blog',
    },
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      <Main>
        {/* Page Heading */}
        <Section>
          <H1>Blog</H1>
          <hr className='my-6' />
          <Paragraph prose className='mb-6'>
            Welcome to...whatever this is 😅 . Here I share my thoughts related
            to many web development topics and programming in general. I've
            always been a fan of writing, and I hope you can find something here
            that could help you in your developer career.
          </Paragraph>

          <SearchBar
            setSearchValue={setSearchValue}
            placeholderText='Search posts...'
          />

          {/* Most Popular Posts */}
          {!searchValue && <H2>Most Popular Posts</H2>}
          {!searchValue && (
            <div className='mb-4 flex flex-col gap-6 md:flex-row'>
              {featuredPosts.map((post, index) => (
                <FeaturedPostCard
                  key={index}
                  title={post.title}
                  slug={post.slug}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
          )}
        </Section>

        {/* All Posts */}
        <Section>
          <H2>{`All Posts (${
            searchValue ? filteredPosts.length : posts.length
          })`}</H2>

          {!filteredPosts.length && (
            <Paragraph className='mt-2'>No posts found...</Paragraph>
          )}

          {filteredPosts.map((post, index) => (
            <BlogPostCard
              key={post._id}
              post={post}
              isLast={index === filteredPosts.length - 1 ? true : false}
            />
          ))}
        </Section>
      </Main>
    </>
  );
}
