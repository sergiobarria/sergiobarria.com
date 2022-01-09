import { useState } from 'react'
import { GetStaticProps } from 'next'

import MainContainer from '@/components/layout/MainContainer'
import SearchBar from '@/components/misc/SearchBar'
import { getFeaturedPosts, getAllPosts } from '@/lib/graphcms'
import FeaturedPosts from '@/components/misc/FeaturedPosts'
import BlogPostCard from '@/components/misc/BlogPostCard'
import PageHeader from '@/components/misc/PageHeader'
import { blogPage } from '@/data/pagesData'
import { IPost } from '@/types/interfaces'
import { addReadTime } from '@/lib/addReadTime'
import { formatDate } from '@/lib/formatDate'

interface IProps {
  featuredPosts: IPost[]
  allPosts: IPost[]
}

export const getStaticProps: GetStaticProps = async () => {
  const featPosts = await getFeaturedPosts()
  const allPosts = await getAllPosts()

  const featuredPosts = addReadTime(featPosts)
  const allPostsWithReadTime = addReadTime(allPosts)

  return {
    props: {
      featuredPosts,
      allPosts: allPostsWithReadTime,
    },
  }
}

export default function BlogPage({ featuredPosts, allPosts }: IProps) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <MainContainer customMetadata={blogPage}>
      <PageHeader pageHeaderData={blogPage.pageHeaderData} />
      <SearchBar
        setSearchValue={setSearchValue}
        placeholderText="Search posts"
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

      {filteredBlogPosts.map((post, index) => {
        const formattedDate = formatDate({ date: post.originallyPublishedOn })

        return (
          <BlogPostCard
            key={post.id}
            post={{ ...post, formattedDate }}
            isLast={index === filteredBlogPosts.length - 1 ? true : false}
          />
        )
      })}
    </MainContainer>
  )
}
