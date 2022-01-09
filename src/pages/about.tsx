import { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import { getAboutContent } from '@/lib/graphcms'

import MainContainer from '@/components/layout/MainContainer'

type Props = {
  aboutPageContent: {
    url: string
    title: string
    description: string
    keywords: string[]
  }
  serializedSource: any
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutPageContent = await getAboutContent()

  const serializedSource = await serialize(aboutPageContent.content.markdown)

  return {
    props: {
      aboutPageContent,
      serializedSource,
    },
  }
}

// TODO: Update SEO keywords and url
export default function HomePage({
  aboutPageContent,
  serializedSource,
}: Props) {
  const { title } = aboutPageContent
  const customMetadata = {
    title: 'About | Sergio Barria',
  }

  return (
    <MainContainer customMetadata={customMetadata}>
      <article className="mt-8">
        <h1>{title}</h1>
        <hr />

        <div className="prose max-w-none prose-neutral dark:prose-invert">
          <MDXRemote {...serializedSource} />
        </div>
      </article>
    </MainContainer>
  )
}
