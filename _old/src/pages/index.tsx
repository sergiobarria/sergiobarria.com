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
import { Main } from '@/components/base';
import Card from '@/components/cards/Card';
import FeaturedPostCard from '@/components/cards/FeaturedPostCard';
import GithubCard from '@/components/cards/GithubCard';
import CurrentGoals from '@/components/CurrentGoals';
import { H1, H2, H4, Paragraph } from '@/components/Typography';

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
    revalidate: 60 * 60, // 60 min
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

      <Main>
        {/* Hero */}
        <Section>
          <header className='md:w-2/3'>
            <H1>Hi, I&apos;m Sergio</H1>
            <Paragraph className='mb-3 text-gray-400 dark:text-gray-500'>
              Web & Mobile Frontend Developer
            </Paragraph>
            <Paragraph>
              I work with the JavaScript ecosystem. Welcome to my small piece of
              the internet, where I write and share about different topics
              related to the tech industry and life style.
            </Paragraph>
          </header>
        </Section>

        {/* What I do */}
        <Section>
          <H2>My Skills</H2>

          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
            {jobs.map((job) => (
              <Card key={job.id} className='hover:border-primary'>
                <div className='flex flex-col'>
                  <H4>{job.title}</H4>
                  <Paragraph className='text-sm dark:text-gray-300'>
                    {job.description}
                  </Paragraph>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Featured Posts */}
        <Section>
          <H2>Featured Posts</H2>

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
                'hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              )}
            >
              See all posts <BsArrowRight className='ml-2' />
            </a>
          </Link>
        </Section>

        {/* Featured Projects */}
        <Section>
          <H2>Featured Projects</H2>
          <Paragraph className='mb-4'>
            Here you can see some of the projects I've work on. This are fetchet
            from Github using Github's GraphQL API.
          </Paragraph>

          <div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {repos.map((repo: GithubRepoGQL) => (
              <GithubCard key={repo.id} repo={repo} />
            ))}
          </div>

          <Link href='/portfolio'>
            <a
              className={clsx(
                'flex items-center text-gray-500 transition-colors ease-in-out',
                'hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              )}
            >
              See all projects <BsArrowRight className='ml-2' />
            </a>
          </Link>
        </Section>

        {/* Current Goals */}
        <Section>
          <H2>What I'm up to right now</H2>
          <CurrentGoals />
        </Section>
      </Main>
    </>
  );
}
