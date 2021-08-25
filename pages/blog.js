import { useState } from 'react';
import { NextSeo } from 'next-seo';

import { getAllPosts } from '@/lib/graphcms';
import Container from '@/components/layout/Container';
import PageHeader from '@/components/utils/PageHeader';
import SearchBar from '@/components/utils/SearchBar';
import PostsPreview from '@/components/blog/PostsPreview';
import { addReadTime } from '@/lib/addReadTime';

export async function getStaticProps() {
  const posts = await getAllPosts();

  const allPosts = await addReadTime(posts);

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60 * 60,
  };
}

export default function BlogPage({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const url = 'https://sergiobarria.com/blog';
  const title = 'Blog | Sergio Barria';
  const description =
    'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer';
  const pageHeaderData = {
    title: 'Updates, Reflections, Productivity & much more',
    subtitle: 'my personal blog',
    text: `Welcome to...whatever this is 😅 . Here I share my thoughts related to
    many web development topics and programming in general. I've always been
    a fan of writing, and I hope you can find something here that could help
    you in your developer career.`,
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <PageHeader {...pageHeaderData} />

        <SearchBar setSearchValue={setSearchValue} />

        <h2 className="mb-4 font-sans text-2xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          All Blog Posts (<span>{filteredBlogPosts.length}</span>)
        </h2>
        <hr />
        {filteredBlogPosts.length ? (
          <PostsPreview posts={filteredBlogPosts} />
        ) : (
          <p className="mt-4 text-gray-900">
            No results found for your search. Please try another term.
          </p>
        )}
      </Container>
    </>
  );
}
