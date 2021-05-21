import { MDXRemote } from 'next-mdx-remote';

import { getAboutContent } from '@/lib/getAbout';
import MDXComponents from '@/components/MDXComponents';
import Container from '@/components/Container';

const About = props => (
  <Container>
    <MDXRemote {...props.about.mdxSource} components={MDXComponents} />
  </Container>
);

export default About;

export async function getStaticProps() {
  const about = await getAboutContent();

  return { props: { about } };
}
