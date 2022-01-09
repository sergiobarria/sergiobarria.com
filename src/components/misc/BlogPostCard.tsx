import NextLink from 'next/link'

import { IPost } from '@/types/interfaces'

interface IProps {
  post: IPost
  isLast?: boolean
}

export default function BlogPostCard({ post, isLast }: IProps) {
  const { title, formattedDate, readTime, slug, excerpt } = post

  return (
    <article className="mt-1">
      <p className="flex items-center text-gray-400 long-text dark:text-gray-500">
        {formattedDate} <span className="mx-2 text-3xl">&middot;</span>{' '}
        {readTime}{' '}
      </p>
      <h3 className="transition-all duration-300 hover:text-gray-700 hover:scale-[1.01]">
        <NextLink href={`/blog/${slug}`}>{title}</NextLink>
      </h3>
      <p className="mt-2 long-text">{excerpt}</p>
      <hr className={`my-4 ${isLast ? 'hidden' : ''}`} />
    </article>
  )
}
