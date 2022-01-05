import CustomSection from '../misc/CustomSection'
import SectionTitle from '../misc/SectionTitle'
import BlogPostCard from '../misc/BlogPostCard'
import { formatDate } from '@/lib/formatDate'

import { IPost } from '@/types/interfaces'

type Props = {
  featuredPosts: IPost[]
}

export default function FeaturedPosts({ featuredPosts }: Props) {
  return (
    <CustomSection>
      <SectionTitle title="Featured Posts" />
      {featuredPosts.map((post, index) => {
        const formattedDate = formatDate({ date: post.originallyPublishedOn })

        return (
          <BlogPostCard
            key={index}
            postTitle={post.title}
            postSlug={post.slug}
            postSummary={post.excerpt}
            publishedDate={formattedDate}
            readTime={post.readTime || '0 min read'}
          />
        )
      })}
    </CustomSection>
  )
}
