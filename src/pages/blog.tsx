import { useState } from 'react';

import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { pick } from 'contentlayer/client';
import { allPosts } from 'contentlayer/generated';

import BlogPostCard from '@/components/cards/BlogPostCard';
import SearchBar from '@/components/forms/SearchBar';

export async function getStaticProps() {
  const featuredPosts = allPosts
    .filter((post) => post.isFeatured)
    .map((post) =>
      pick(post, [
        '_id',
        'slug',
        'title',
        'summary',
        'publishedAt',
        'readingTime',
      ])
    );
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
      <div className='layout'>
        {/* Page Heading */}
        <section className='section'>
          <h1>Blog</h1>
          <hr className='my-6' />
          <p className='prose mb-6 max-w-none dark:prose-invert'>
            Welcome to...whatever this is 😅 . Here I share my thoughts related
            to many web development topics and programming in general. I've
            always been a fan of writing, and I hope you can find something here
            that could help you in your developer career.
          </p>

          <SearchBar
            setSearchValue={setSearchValue}
            placeholderText='Search posts...'
          />

          {/* Most Popular Posts */}
          {!searchValue && <h2>Most Popular Posts</h2>}
          {!searchValue &&
            featuredPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
        </section>

        {/* All Posts */}
        <section className='section py-10'>
          <h2>{`All Posts (${
            searchValue ? filteredPosts.length : posts.length
          })`}</h2>

          {!filteredPosts.length && (
            <p className='mt-2 text-gray-500 dark:text-gray-300'>
              No posts found...
            </p>
          )}

          {filteredPosts.map((post, index) => (
            <BlogPostCard
              key={post._id}
              post={post}
              isLast={index === filteredPosts.length - 1 ? true : false}
            />
          ))}
        </section>
      </div>
    </>
  );
}
