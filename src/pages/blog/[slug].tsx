import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'

import BlogPostLayout from '@/components/layout/BlogPostLayout'
import { getAllSlug } from '@/lib/graphcms'
import { getPostBySlug } from '@/lib/graphcms'
import readingTime from 'reading-time'
import { IPost, IPropsWithChildren } from '@/types/interfaces'

interface IParams extends ParsedUrlQuery {
  slug: string
}

interface IProps extends IPropsWithChildren {
  post: IPost
  allPosts: IPost[]
  source: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllSlug()

  return {
    paths: data.map((slug: any) => ({
      params: {
        ...slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as IParams

  const { post, posts } = await getPostBySlug(slug)

  const source = await serialize(post.body.markdown)

  return {
    props: {
      post: {
        ...post,
        readTime: readingTime(post.body.markdown).text,
      },
      allPosts: posts,
      source,
    },
    // revalidate: 60 * 5
  }
}

// TODO: Check if the allPosts will be used or removed it from fetch
export default function PostPage({ post, allPosts, source }: IProps) {
  return (
    <BlogPostLayout post={post}>
      <MDXRemote {...(source as any)} />
    </BlogPostLayout>
  )
}
