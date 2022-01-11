import NextLink from 'next/link'
import useSWR from 'swr'

import { IPost } from '@/types/PostTypes'
import { IViews } from '@/types/interfaces'
import fetcher from '@/lib/fetcher'

interface IProps {
  post: IPost
  isLast?: boolean
}

export default function BlogPostCard({ post, isLast }: IProps) {
  const { title, formattedDate, readTime, slug, summary } = post
  const { data } = useSWR<IViews>(`/api/views/${slug}`, fetcher)
  const views = data?.total

  return (
    <article className="mt-1">
      <p className="flex items-center text-gray-400 long-text dark:text-gray-500">
        {formattedDate} <span className="mx-2 text-3xl">&middot;</span>{' '}
        {readTime} <span className="mx-2 text-3xl">&middot;</span>
        <span>{views ? new Number(views).toLocaleString() : '---'} views</span>
      </p>
      <h3 className="transition-all duration-300 hover:text-gray-700 hover:scale-[1.01]">
        <NextLink href={`/blog/${slug}`}>{title}</NextLink>
      </h3>
      <p className="mt-2 long-text">{summary}</p>
      <hr className={`my-4 ${isLast ? 'hidden' : ''}`} />
    </article>
  )
}
