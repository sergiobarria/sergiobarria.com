import { MDXRemote } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';

import { getAboutContent } from '@/lib/getAbout';
import MDXComponents from '@/components/utils/MDXComponents';
import Container from '@/components/layout/Container';

export async function getStaticProps() {
  const about = await getAboutContent();

  return { props: { about } };
}

export default function About(props) {
  const url = 'https://sergiobarria.com/about';
  const title = 'About | Sergio Barria';
  const description =
    'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer';

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <article className="max-w-2xl px-4 mx-auto lg:px-0">
          <h1 className="text-center">{props.about.frontMatter.title}</h1>
          <hr className="my-4" />
          <div className="prose dark:prose-dark">
            <MDXRemote {...props.about.mdxSource} components={MDXComponents} />
          </div>
        </article>
      </Container>
    </>
  );
}
