import NextImage from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'

import { client } from '@/lib/urql/client'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { getPlaiceholder } from 'plaiceholder'
import { ParsedUrlQuery } from 'querystring'

import BlogPostLayout from '@/components/layout/BlogPostLayout'
import { getAllSlug } from 'src/lib/graphcms'
import { getPostBySlug } from 'src/lib/graphcms'
import readingTime from 'reading-time'
import { addDataBlurUrl } from 'src/lib/addDataBlurUrl'
import { IAssetImage, IPost } from '@/types/PostTypes'

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
  const { base64: blurDataUrl, img } = await getPlaiceholder(
    post.coverImage.url
  )

  const references = post.content.references
  const images = references.filter((asset: IAssetImage) =>
    asset.mimeType.includes('image')
  )

  const assetImages = await addDataBlurUrl(references, images)
  const coverImageAssets = { ...post.coverImage, blurDataUrl, ...img }

  return {
    props: {
      data: {
        ...post,
        assetImages,
        coverImage: { ...coverImageAssets },
        readTime: readingTime(post.content.markdown).text,
      },
    },
  }
}

export default function PostPage({ data }: { data: IPost }) {
  const { content, assetImages } = data

  return (
    <BlogPostLayout post={data}>
      <RichText
        content={content.json}
        references={assetImages}
        renderers={{
          Asset: {
            image: ({ url, width, height, blurDataUrl }) => {
              return (
                <NextImage
                  src={url}
                  width={width}
                  height={height}
                  placeholder={blurDataUrl ? 'blur' : 'empty'}
                  blurDataURL={blurDataUrl}
                />
              )
            },
          },
        }}
      />
    </BlogPostLayout>
  )
}
