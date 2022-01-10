import { PropsWithChildren } from 'react'
import NextImage from 'next/image'

import MainContainer from '@/components/layout/MainContainer'
import ContentWrapper from '../misc/ContentWrapper'
import { IPost } from '@/types/PostTypes'
import { formatDate } from '@/lib/formatDate'

interface IProps {
  post: IPost
}

export default function BlogPostLayout({
  children,
  post,
}: PropsWithChildren<IProps>) {
  const { coverImage, title, originallyPublishedOn, readTime, summary } = post

  const formattedDate = formatDate({ date: originallyPublishedOn })

  return (
    <MainContainer>
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
        <p>
          Published on: <span>{formattedDate}</span>{' '}
        </p>
        <span className="text-4xl">&middot;</span>
        <p>{readTime}</p>
        <span className="text-4xl">&middot;</span>
        <p>--- views</p>
      </div>

      <div className="py-6 italic long-text border-y">{summary}</div>

      <ContentWrapper>{children}</ContentWrapper>
    </MainContainer>
  )
}
