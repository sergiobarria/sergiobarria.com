import NextLink from 'next/link';
import Image from 'next/image';

import { getAllFilesFrontMatter } from '@/lib/mdx';

import Container from '@/components/Container';
import BlogPostPreview from '@/components/BlogPostPreview';

export default function Home({ posts }) {
  const latestPosts = posts.allPosts.slice(0, 4);
  // console.log(latestPosts);

  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-4">
        <h1 className="mb-4 text-2xl font-bold text-black md:text-4xl tracking-tigh dark:text-gray-100">
          Hey, I'm Sergio
        </h1>
        <p className="mb-8 font-normal prose text-gray-600 dark:text-gray-100">
          I'm an Engineer, developer and writer. For last few years I've worked
          as a Civil Engineer until I decide to take a professional turn and
          becoming a web developer. I created this small space on the internet
          to share my journey and try to help others who are also starting to
          learn how to code.
        </p>
      </div>
      <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-4xl md:leading-14">
            My latest toughts
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!latestPosts.length && 'No posts found.'}
          {latestPosts.map(post => {
            const { id, title, slug, publishedAt, excerpt, category, tags } =
              post;
            return (
              <li key={id} className="py-4">
                <article>
                  <BlogPostPreview
                    title={title}
                    slug={slug}
                    excerpt={excerpt}
                    tags={tags}
                  />
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllFilesFrontMatter();

  return {
    props: {
      posts,
    },
  };
}
