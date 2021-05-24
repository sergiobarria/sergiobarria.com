import { useState } from 'react';

import Container from '@/components/Container';
import PostListPreview from '@/components/PostListPreview';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export async function getStaticProps() {
  const posts = getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.allFiles.filter(frontMatter =>
    frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container>
      <h1 className="mb-4 text-2xl font-bold text-center text-gray-800 md:text-5xl tracking-tigh dark:text-gray-100">
        Welcome to my Blog
      </h1>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-4">
        <p className="mb-8 font-normal prose text-center text-gray-600 dark:text-gray-100">
          Welcome to...whatever this is 😅 , here I share my thoughts related to
          many web development topics and programming in general. I've always
          been a fan of writing, and I hope you can find something here that
          could help you in your developer career.
        </p>
      </div>

      {/* Post search functionality */}
      <div className="relative w-full mb-4">
        <input
          aria-label="Search posts"
          type="text"
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Search posts..."
          className="block w-full px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-md outline-none dark:border-gray-900 focus:ring-green-400 focus:border-green-400 focus:ring-1 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <h1 className="mt-12 text-2xl font-bold text-skin-title md:text-4xl tracking-tigh dark:text-skin-inverted">
        All Blog Posts (<span>{filteredBlogPosts.length}</span>)
      </h1>
      <PostListPreview postsArr={filteredBlogPosts} />
    </Container>
  );
}
