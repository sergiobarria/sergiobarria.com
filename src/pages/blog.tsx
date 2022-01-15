import { useState } from 'react';

import { InferGetStaticPropsType } from 'next';

import { pick } from 'contentlayer/client';

import BlogPostCard from '@/components/BlogPostCard';
import Layout from '@/components/layout-main/Layout';
import SearchBar from '@/components/SearchBar';

import { allPosts } from '.contentlayer/data';

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
    revalidate: 60 * 60, // 3600s -> 1 hour
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
    url: 'https://sergiobarria.com/blog',
    title: 'Blog | Sergio Barria',
  };

  return (
    <Layout customMetadata={customMetadata}>
      {/* Page Heading */}
      <section className='section'>
        <div className='layout'>
          <h1>Blog</h1>
          <hr className='my-6' />
          <p className='mb-6 prose max-w-none long-text dark:prose-invert'>
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
        </div>
      </section>

      {/* All Posts */}
      <section className='py-10 section'>
        <div className='layout'>
          <h2>{`All Posts (${
            searchValue ? filteredPosts.length : posts.length
          })`}</h2>

          {!filteredPosts.length && (
            <p className='mt-2 text-gray-regular dark:text-gray-lighter'>
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
        </div>
      </section>
    </Layout>
  );
}
