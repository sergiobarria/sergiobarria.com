import NextLink from 'next/link'

import { IPostCardPreview } from '@/types/interfaces'

export default function BlogPostCard({
  postTitle,
  postSummary,
  postSlug,
  publishedDate,
  readTime,
}: IPostCardPreview) {
  return (
    <article className="mt-6">
      <p className="flex items-center text-gray-400 dark:text-gray-500">
        {publishedDate} <span className="mx-2 text-3xl">&middot;</span>{' '}
        {readTime}{' '}
      </p>
      <h3 className="transition-all duration-300 hover:text-gray-700 hover:scale-[1.01]">
        <NextLink href={`/blog/${postSlug}`}>{postTitle}</NextLink>
      </h3>
      <p>{postSummary}</p>
      <hr className="my-4" />
    </article>
  )
}
