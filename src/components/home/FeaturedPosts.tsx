import NextLink from 'next/link'

import CustomSection from '../misc/CustomSection'
import SectionTitle from '../misc/SectionTitle'
import BlogPostCard from '../misc/BlogPostCard'

export default function FeaturedPosts() {
  return (
    <CustomSection>
      <SectionTitle title="Featured Posts" />
      {[...Array(3)].map((_, index) => (
        <BlogPostCard
          key={index}
          postTitle="How to link and display your latest blog posts to your Github
            Profile"
          postSlug="How to link and display your latest blog posts to your Github
            Profile"
          postSummary="In this guide, we’ll see an easy way of linking our latest blog posts
            to our Github profile using a…"
          publishedDate="August 14, 2021"
          readingTime="3"
        />
      ))}
    </CustomSection>
  )
}
