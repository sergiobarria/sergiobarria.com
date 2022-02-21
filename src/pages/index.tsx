import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { pick } from 'contentlayer/client';
import { allPosts } from 'contentlayer/generated';

import { client } from '@/lib/urql/client';
import { PINNED_REPOS_QUERY } from '@/lib/urql/queries';

import { Section } from '@/components/base';
import BlogPostCard from '@/components/cards/BlogPostCard';
import GithubCard from '@/components/cards/GithubCard';
import JobsCard from '@/components/cards/JobsCard';
import CurrentGoals from '@/components/CurrentGoals';
import List from '@/components/misc/List';

import { jobs } from '@/fixtures/jobs';

import { IGithubRepoGQL } from '@/types/interfaces';

export async function getStaticProps() {
  const posts = allPosts.filter((post) => post.isFeatured);
  const featuredPosts = posts.map((post) =>
    pick(post, [
      '_id',
      'title',
      'slug',
      'summary',
      'publishedAt',
      'readingTime',
    ])
  );

  const { data } = await client.query(PINNED_REPOS_QUERY).toPromise();

  const { user } = data;

  const pinnedRepos = user.pinnedItems.edges.map(
    ({ node }: { node: IGithubRepoGQL }) => node
  );

  return {
    props: {
      featuredPosts,
      repos: pinnedRepos,
    },
    revalidate: 60 * 10, // 10 min
  };
}

export default function HomePage({
  featuredPosts,
  repos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const customMetadata = {
    title: 'Home',
    canonical: 'https://sergiobarria.com/',
    openGraph: {
      url: 'https://sergiobarria.com/',
    },
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      {/* Hero */}
      <Section className='mt-0'>
        <div className='layout'>
          <header className='w-2/3'>
            <h1 className='mb-0'>Hi, I&apos;m Sergio</h1>
            <p className='mb-3 text-gray-400 dark:text-gray-400'>
              Frontend Web & Mobile Developer
            </p>
            <p>
              I work with the JavaScript ecosystem. Welcome to my small piece of
              the internet, where I write and share about different topics
              related to the tech industry and life style.
            </p>
          </header>
        </div>
      </Section>

      {/* What I do */}
      <Section>
        <div className='layout'>
          <h2 className='mb-4'>What I do</h2>
          <List items={jobs} as='grid'>
            {(job) => <JobsCard job={job} />}
          </List>
        </div>
      </Section>

      {/* Featured Posts */}
      <Section>
        <div className='layout'>
          <h2 className='mb-6'>Featured Posts</h2>
          <List items={featuredPosts}>
            {(post) => <BlogPostCard post={post} />}
          </List>
        </div>
      </Section>

      {/* Featured Projects */}
      <section className='section'>
        <div className='layout'>
          <h2 className='mb-6'>Featured Projects</h2>
          <p className='mb-4'>
            Here you can see some of the projects I've work on. This are fetchet
            from Github using Github's GraphQL API.
          </p>
          <List items={repos} as='grid'>
            {(repo: IGithubRepoGQL) => <GithubCard repo={repo} />}
          </List>
        </div>
      </section>

      {/* Current Goals */}
      <Section>
        <div className='layout'>
          <h2 className='mb-2'>What I'm up to right now</h2>
          <CurrentGoals />
        </div>
      </Section>
    </>
  );
}
