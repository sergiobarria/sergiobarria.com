import NextImage from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'

import { client } from '@/lib/urql/client'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { ParsedUrlQuery } from 'querystring'

import BlogPostLayout from '@/components/layout/BlogPostLayout'
import { getAllSlug } from 'src/lib/graphcms'
import { getPostBySlug } from 'src/lib/graphcms'
import { IPost } from '@/types/PostTypes'

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const GET_SLUGS_QUERY = getAllSlug()
  // const data = await getAllSlug()

  const {
    data: { posts },
  } = await client?.query(GET_SLUGS_QUERY).toPromise()
  return {
    paths: posts.map((slug: any) => ({
      params: {
        ...slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as IParams
  const query = getPostBySlug()

  const {
    data: { post },
  } = await client.query(query, { slug }).toPromise()

  return {
    props: {
      post,
    },
  }
}

export default function PostPage({ post }: { post: IPost }) {
  // console.log(post)

  return (
    <BlogPostLayout post={post}>
      <RichText
        content={post.content.json}
        references={post.content.references}
        renderers={{
          Asset: {
            image: ({ url, width, height }) => {
              return <NextImage src={url} width={width} height={height} />
            },
          },
        }}
      />
    </BlogPostLayout>
  )
}
