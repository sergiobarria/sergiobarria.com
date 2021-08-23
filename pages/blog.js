import { useState } from 'react';
import { NextSeo } from 'next-seo';

import Container from '@/components/layout/Container';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import PageHeader from '@/components/utils/PageHeader';
import SearchBar from '@/components/utils/SearchBar';
import PostsPreview from '@/components/blog/PostsPreview';

export async function getStaticProps() {
  const posts = getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default function BlogPage({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.allFiles.filter(frontMatter =>
    frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
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

        <h1>
          All Blog Posts (<span>{filteredBlogPosts.length}</span>)
        </h1>
        <hr />
        <PostsPreview posts={filteredBlogPosts} />
      </Container>
    </>
  );
}
