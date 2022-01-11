import { GetStaticProps } from 'next'
import { RichText } from '@graphcms/rich-text-react-renderer'

import { client } from '@/lib/urql/client'
import { getAboutContent } from 'src/lib/graphcms'
import MainLayout from '@/components/layout/MainLayout'

interface IProps {
  about: {
    id: string
    title: string
    content: {
      markdown: any
      json: any
    }
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const query = getAboutContent()

  const {
    data: { about },
  } = await client?.query(query).toPromise()

  return {
    props: {
      about,
    },
    revalidate: 60 * 60 * 24, // 86,400s -> 1 day
  }
}

export default function AboutPage({ about }: IProps) {
  const customMetadata = {
    title: 'About | Sergio Barria',
    url: 'https://sergiobarria.com/about',
  }

  return (
    <MainLayout customMetadata={customMetadata}>
      <article className="mt-8">
        <h1>{about.title}</h1>
        <hr />

        <div className="prose max-w-none prose-neutral dark:prose-invert">
          <RichText content={about.content.json} />
        </div>
      </article>
    </MainLayout>
  )
}
