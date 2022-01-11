import { useState } from 'react'
import { GetStaticProps } from 'next'

import { client } from '@/lib/urql/client'

import MainLayout from '@/components/layout/MainLayout'
import SearchBar from '@/components/misc/SearchBar'
import { getFeaturedPosts, getAllPosts } from 'src/lib/graphcms'
import FeaturedPosts from '@/components/misc/FeaturedPosts'
import BlogPostCard from '@/components/misc/BlogPostCard'
import { IPost } from '@/types/PostTypes'
import { addReadTime } from 'src/lib/addReadTime'
import { formatDate } from 'src/lib/formatDate'

interface IProps {
  featPosts: IPost[]
  allPostsData: IPost[]
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredPostsQuery = getFeaturedPosts()
  const allPostsQuery = getAllPosts()

  const {
    data: { posts: featPosts },
  } = await client?.query(featuredPostsQuery).toPromise()
  const {
    data: { posts: allPostsData },
  } = await client?.query(allPostsQuery).toPromise()

  return {
    props: {
      featPosts,
      allPostsData,
    },
    revalidate: 60 * 60, // 3600s -> 1 hour
  }
}

export default function BlogPage({ featPosts, allPostsData }: IProps) {
  const [searchValue, setSearchValue] = useState('')

  const featuredPosts = addReadTime(featPosts)
  const allPosts = addReadTime(allPostsData)

  // Filter blog posts
  const filteredBlogPosts = allPosts.filter((post: IPost) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  const customMetadata = {
    url: 'https://sergiobarria.com/blog',
    title: 'Blog | Sergio Barria',
  }

  return (
    <MainLayout customMetadata={customMetadata}>
      <div>
        <h1>Updates, Reflections, Productivity & much more</h1>
        <hr className="my-6" />
        <p className="mb-6 prose max-w-none long-text dark:prose-invert">
          Welcome to...whatever this is 😅 . Here I share my thoughts related to
          many web development topics and programming in general. I&apos;ve
          always been a fan of writing, and I hope you can find something here
          that could help you in your developer career.
        </p>
      </div>
      <SearchBar
        setSearchValue={setSearchValue}
        placeholderText="Search posts..."
      />
      {!searchValue && (
        <FeaturedPosts
          title="Most Popular Posts"
          featuredPosts={featuredPosts}
        />
      )}

      <h2 className="mt-16">{`All Posts (${
        searchValue ? filteredBlogPosts.length : allPosts.length
      })`}</h2>

      {!filteredBlogPosts.length && (
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          No posts found...
        </p>
      )}

      {filteredBlogPosts.map((post: IPost, index: number) => {
        const formattedDate = formatDate({ date: post.originallyPublishedOn })

        return (
          <BlogPostCard
            key={post.id}
            post={{ ...post, formattedDate }}
            isLast={index === filteredBlogPosts.length - 1 ? true : false}
          />
        )
      })}
    </MainLayout>
  )
}
