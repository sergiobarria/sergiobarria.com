import { MDXRemote } from 'next-mdx-remote';

import { getAboutContent } from '@/lib/getAbout';
import MDXComponents from '@/components/MDXComponents';
import Container from '@/components/Container';

export async function getStaticProps() {
  const about = await getAboutContent();

  return { props: { about } };
}

const About = props => (
  <Container>
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="mb-4 text-2xl font-bold text-center text-skin-title md:text-4xl tracking-tigh dark:text-skin-inverted">
        {props.about.frontMatter.title}
      </h1>
      <hr className="my-4" />
      <div className="prose dark:prose-dark">
        <MDXRemote {...props.about.mdxSource} components={MDXComponents} />
      </div>
    </div>
  </Container>
);

export default About;
