import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import clsx from 'clsx';
import { pick } from 'contentlayer/client';
import { allPosts } from 'contentlayer/generated';
import { BsArrowRight } from 'react-icons/bs';

import { client } from '@/lib/urql/client';
import { PINNED_REPOS_QUERY } from '@/lib/urql/queries';

import { Section } from '@/components/base';
import { PageContainer } from '@/components/base';
import Card from '@/components/cards/Card';
import FeaturedPostCard from '@/components/cards/FeaturedPostCard';
import GithubCard from '@/components/cards/GithubCard';
import CurrentGoals from '@/components/CurrentGoals';

import { jobs } from '@/fixtures/jobs';

import { GithubRepoGQL } from '@/types';

export async function getStaticProps() {
  const posts = allPosts.filter((post) => post.isFeatured);
  const featuredPosts = posts.map((post) =>
    pick(post, ['_id', 'title', 'slug', 'readingTime'])
  );

  const { data } = await client.query(PINNED_REPOS_QUERY).toPromise();

  const { user } = data;

  const pinnedRepos = user.pinnedItems.edges.map(
    ({ node }: { node: GithubRepoGQL }) => node
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

      <PageContainer>
        {/* Hero */}
        <Section>
          <header className='md:w-2/3'>
            <h1 className='mb-0'>Hi, I&apos;m Sergio</h1>
            <p className='mb-3 text-gray-400 dark:text-gray-500'>
              Frontend Web & Mobile Developer
            </p>
            <p className='text-gray-700 dark:text-gray-200'>
              I work with the JavaScript ecosystem. Welcome to my small piece of
              the internet, where I write and share about different topics
              related to the tech industry and life style.
            </p>
          </header>
        </Section>

        {/* What I do */}
        <Section>
          <h2 className='mb-4'>My Skills</h2>

          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
            {jobs.map((job) => (
              <Card key={job.id} className='hover:border-primary'>
                <div className='flex flex-col'>
                  <h4>{job.title}</h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    {job.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Featured Posts */}
        <Section>
          <h2 className='mb-6'>Featured Posts</h2>

          <div className='mb-4 flex flex-col gap-6 md:flex-row'>
            {featuredPosts.map((post) => (
              <FeaturedPostCard
                key={post._id}
                title={post.title}
                slug={post.slug}
                readingTime={post.readingTime}
              />
            ))}
          </div>

          <Link href='/blog'>
            <a
              className={clsx(
                'flex items-center text-gray-500 transition-colors ease-in-out',
                'hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600'
              )}
            >
              See all posts <BsArrowRight className='ml-2' />
            </a>
          </Link>
        </Section>

        {/* Featured Projects */}
        <Section>
          <h2 className='mb-6'>Featured Projects</h2>
          <p className='mb-4 text-gray-600 dark:text-gray-200'>
            Here you can see some of the projects I've work on. This are fetchet
            from Github using Github's GraphQL API.
          </p>

          <div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {repos.map((repo: GithubRepoGQL) => (
              <GithubCard key={repo.id} repo={repo} />
            ))}
          </div>

          <Link href='/portfolio'>
            <a
              className={clsx(
                'flex items-center text-gray-500 transition-colors ease-in-out',
                'hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600'
              )}
            >
              See all projects <BsArrowRight className='ml-2' />
            </a>
          </Link>
        </Section>

        {/* Current Goals */}
        <Section>
          <h2 className='mb-2'>What I'm up to right now</h2>
          <CurrentGoals />
        </Section>
      </PageContainer>
    </>
  );
}
