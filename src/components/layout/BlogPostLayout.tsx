import { PropsWithChildren } from 'react'
import NextImage from 'next/image'

import MainLayout from '@/components/layout/MainLayout'
import ContentWrapper from '../misc/ContentWrapper'
import ViewCounter from '../misc/ViewCounter'
import { IPost } from '@/types/PostTypes'
import { formatDate } from 'src/lib/formatDate'
import readingTime from 'reading-time'

interface IProps {
  post: IPost
}

export default function BlogPostLayout({
  children,
  post,
}: PropsWithChildren<IProps>) {
  const { coverImage, title, originallyPublishedOn, summary, slug } = post

  const formattedDate = formatDate({ date: originallyPublishedOn })
  const readTime = readingTime(post.content.markdown).text

  const customMetadata = {
    url: 'https://sergiobarria.com/blog',
    title: 'Blog | Sergio Barria',
  }

  return (
    <MainLayout customMetadata={customMetadata}>
      <NextImage
        src={coverImage?.url || '/static/images/placeholder.jpeg'}
        width={coverImage?.width || 1280}
        height={coverImage?.height || 720}
        placeholder={coverImage?.blurDataUrl ? 'blur' : 'empty'}
        blurDataURL={coverImage?.blurDataUrl}
        alt={coverImage?.alt}
        className="rounded-2xl"
      />
      <h1 className="mt-4">{title}</h1>
      <div className="flex items-center my-4 space-x-4 long-text">
        <span>{formattedDate}</span> <span className="text-4xl">&middot;</span>
        <p>{readTime}</p>
        <span className="text-4xl">&middot;</span>
        {/* <p>--- views</p> */}
        <ViewCounter slug={slug} />
      </div>

      <div className="py-6 italic long-text border-y">{summary}</div>

      <ContentWrapper>{children}</ContentWrapper>
    </MainLayout>
  )
}
