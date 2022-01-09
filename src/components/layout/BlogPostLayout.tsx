import NextImage from 'next/image'

import MainContainer from '@/components/layout/MainContainer'
import { IPost, IPropsWithChildren } from '@/types/interfaces'
import { formatDate } from '@/lib/formatDate'

interface IProps extends IPropsWithChildren {
  post: IPost
  allPosts?: IPost[]
}

export default function BlogPostLayout({ children, post }: IProps) {
  const formattedDate = formatDate({ date: post.originallyPublishedOn })

  return (
    <MainContainer>
      <NextImage
        src={post.coverImage.url}
        width={post.coverImage.width}
        height={post.coverImage.height}
        className="rounded-2xl"
      />
      <h1 className="mt-4">{post.title}</h1>
      <div className="flex items-center my-4 space-x-4 long-text">
        <p>
          Published on: <span>{formattedDate}</span>{' '}
        </p>
        <span className="text-4xl">&middot;</span>
        <p>{post.readTime}</p>
        <span className="text-4xl">&middot;</span>
        <p>--- views</p>
      </div>

      {/* content */}
      <div className="prose mt-14 max-w-none dark:prose-invert">{children}</div>
    </MainContainer>
  )
}
