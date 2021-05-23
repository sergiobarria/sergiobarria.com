import { MDXRemote } from 'next-mdx-remote';

import BlogLayout from '@/layouts/BlogLayout';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';

export async function getStaticPaths() {
  const posts = getFiles('blog');

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return {
    props: {
      ...post,
    },
  };
}

const SingleBlogPost = ({ mdxSource, frontMatter }) => (
  <BlogLayout frontMatter={frontMatter}>
    <MDXRemote {...mdxSource} components={MDXComponents} />
  </BlogLayout>
);

export default SingleBlogPost;
