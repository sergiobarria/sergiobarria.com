import { InferGetStaticPropsType } from 'next'

import { client } from '@/lib/urql/client'
import { PINNED_REPOS_QUERY } from '@/lib/urql/queries'

import Layout from '@/components/layout/Layout'
import BlogPostCard from '@/components/misc/BlogPostCard'
import CurrentGoals from '@/components/misc/CurrentGoals'
import GithubCard from '@/components/misc/GithubCard'

import { allPosts } from '.contentlayer/data'

import { IGithubRepoGQL } from '@/types/interfaces'

export async function getStaticProps() {
  const featuredPosts = allPosts.filter(post => post.isFeatured)

  const {
    data: { user },
  } = await client.query(PINNED_REPOS_QUERY).toPromise()

  const pinnedRepos = user.pinnedItems.edges.map(
    ({ node }: { node: IGithubRepoGQL }) => node
  )

  return {
    props: {
      featuredPosts,
      repos: pinnedRepos,
    },
    revalidate: 60 * 10, // 10 min
  }
}

export default function HomePage({
  featuredPosts,
  repos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const customMetadata = {
    url: 'https://sergiobarria.com/',
    title: 'Home | Sergio Barria',
    description:
      'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer',
  }

  return (
    <Layout customMetadata={customMetadata}>
      <div className="layout md:my-8">
        {/* Hero */}
        <section className="w-full md:w-10/12">
          <h1 className="mb-3">Hi, I&apos;m Sergio</h1>
          <p className="text-lg text-gray-lighter dark:text-gray-lighter">
            Web Developer
          </p>
          <p className="text-lg text-gray-regular dark:text-gray-light">
            I work with the JavaScript ecosystem. Welcome to my small piece of
            the internet, where I write and share about different topics related
            to the tech industry and life style.
          </p>
        </section>
      </div>

      {/* Featured Posts */}
      <section className="section">
        <div className="layout">
          <h2 className="mb-6">Featured Posts</h2>
          {featuredPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="layout">
          <h2 className="mb-6">Featured Projects</h2>
          <p className="mb-4 text-long">
            Here you can see some of the projects I've work on. This are fetchet
            from Github using Github's GraphQL API.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {repos.map((repo: IGithubRepoGQL) => (
              <GithubCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      </section>

      {/* Current Goals */}
      <section className="section">
        <div className="layout">
          <h2 className="mb-2">What I'm up to right now</h2>
          <CurrentGoals />
        </div>
      </section>
    </Layout>
  )
}
