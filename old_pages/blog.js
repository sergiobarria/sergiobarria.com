import { useState } from 'react';
import { NextSeo } from 'next-seo';

import { getAllPosts } from '@/lib/graphcms';
import Container from '@/components/layout/Container';
import PageHeader from '@/components/utils/PageHeader';
import SearchBar from '@/components/utils/SearchBar';
import PostsPreview from '@/components/blog/PostsPreview';
import { addReadTime } from '@/lib/addReadTime';
import { blogPage } from '@/data/pagesData';

export async function getStaticProps() {
  const posts = await getAllPosts();

  const allPosts = await addReadTime(posts);

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60 * 5,
  };
}

export default function BlogPage({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const { url, title, description, keywords, pageHeaderData } = blogPage;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords,
          },
        ]}
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
