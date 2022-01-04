import NextLink from 'next/link'

import { IPostCardPreview } from '@/types/interfaces'

export default function BlogPostCard({
  postTitle,
  postSummary,
  postSlug,
  publishedDate,
}: IPostCardPreview) {
  return (
    <article className="mt-6">
      <p className="text-gray-400">{publishedDate}</p>
      <h3 className="transition-all duration-300 heading-3 hover:text-gray-700 hover:scale-[1.01]">
        <NextLink href={`/blog/${postSlug}`}>{postTitle}</NextLink>
      </h3>
      <p>{postSummary}</p>
      <hr className="my-4" />
    </article>
  )
}
