import React, { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { getPlaiceholder } from 'plaiceholder'
import { ParsedUrlQuery } from 'querystring'
import NextImage from 'next/image'
// import imageSize from 'rehype-image-size'

import BlogPostLayout from '@/components/layout/BlogPostLayout'
import { getAllSlug } from '@/lib/graphcms'
import { getPostBySlug } from '@/lib/graphcms'
import readingTime from 'reading-time'
import { addDataBlurUrl } from '@/lib/addDataBlurUrl'
import { IAssetImage } from '@/types/PostTypes'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

interface IParams extends ParsedUrlQuery {
  slug: string
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
  const { post } = await getPostBySlug(slug)
  const { base64: blurDataUrl, img } = await getPlaiceholder(
    post.coverImage.url
  )

  const mdxSource = await serialize(post.content.markdown, {
    mdxOptions: {
      // rehypePlugins: [imageSize],
    },
  })

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
      mdxSource,
    },
  }
}

// TODO: Check if the allPosts will be used or removed it from fetch
export default function PostPage({
  data,
  mdxSource,
}: {
  data: any
  mdxSource: any
}) {
  const { content, assetImages } = data
  console.log(mdxSource)

  const components = {
    img: (props: any) => (
      <NextImage {...props} alt="test" layout="responsive" loading="lazy" />
    ),
  }

  return (
    <BlogPostLayout post={data}>
      <MDXRemote {...mdxSource} components={components} />
      {/* <RichText
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
            // a: ({ children }: { children: React.ReactNode }) => {
            //   return <a className="bg-teal-400">{children}</a>
            // },
            // code_block: ({ children }: { children: React.ReactNode }) => {
            //   return (
            //     <pre className="bg-gray-200">
            //       <code className="bg-gray-200">{children}</code>
            //     </pre>
            //   )
            // },
          },
        }}
      /> */}
    </BlogPostLayout>
  )
}
