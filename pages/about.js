import { getAboutContent } from '@/lib/graphcms';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { NextSeo } from 'next-seo';
import Container from '@/components/layout/Container';
import { aboutPage } from '@/data/pagesData';

export async function getStaticProps() {
  const about = await getAboutContent();

  const source = await serialize(about.content.markdown);

  return {
    props: {
      about,
      source,
    },
    revalidate: 60 * 60 * 10,
  };
}

export default function About({ about, source }) {
  const { url, title, description, keywords } = aboutPage;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords,
          },
        ]}
      />
      <Container>
        <article className="max-w-2xl px-4 mx-auto lg:px-0">
          <h2 className="text-center normal-case heading-2">{about.title}</h2>
          <hr className="my-4 border-main-light" />
          <div className="prose dark:prose-dark">
            <MDXRemote {...source} />
          </div>
        </article>
      </Container>
    </>
  );
}
