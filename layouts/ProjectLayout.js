// import NextImage from 'next/image';
// import NextLink from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function ProjectLayout({ children, frontMatter }) {
  // const currProject = frontMatter.id;

  const url = `https://sergiobarria.com/blog/${frontMatter.title}`;
  const title = 'Blog | Sergio Barria';
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
        <h1>{frontMatter.title}</h1>
        {children}
      </Container>
    </>
  );
}
