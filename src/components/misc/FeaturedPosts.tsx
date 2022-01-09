import Section from './Section'
import SectionTitle from './SectionTitle'
import BlogPostCard from './BlogPostCard'
import { formatDate } from '@/lib/formatDate'

import { IPost } from '@/types/interfaces'

type Props = {
  featuredPosts: IPost[]
  title?: string
}

export default function FeaturedPosts({ title, featuredPosts }: Props) {
  return (
    <Section>
      <SectionTitle title={title || 'Featured Posts'} />
      {featuredPosts.map((post, index) => {
        const formattedDate = formatDate({ date: post.originallyPublishedOn })

        return <BlogPostCard key={index} post={{ ...post, formattedDate }} />
      })}
    </Section>
  )
}
