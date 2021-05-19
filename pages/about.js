import { MDXRemote } from 'next-mdx-remote';

import { getAboutContent } from '@/lib/getAbout';
import MDXComponents from '@/components/MDXComponents';

const About = props => (
  <>
    <MDXRemote {...props.about.mdxSource} components={MDXComponents} />
  </>
);

export default About;

export async function getStaticProps() {
  const about = await getAboutContent();

  return { props: { about } };
}
