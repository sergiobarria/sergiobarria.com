import { MDXRemote } from 'next-mdx-remote';

import { getAboutContent } from '@/lib/getAbout';
import MDXComponents from '@/components/MDXComponents';
import MainContainer from '@/components/Container';

const About = props => (
  <MainContainer>
    <MDXRemote {...props.about.mdxSource} components={MDXComponents} />
  </MainContainer>
);

export default About;

export async function getStaticProps() {
  const about = await getAboutContent();

  return { props: { about } };
}
