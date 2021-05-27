import { MDXRemote } from 'next-mdx-remote';

import BlogLayout from '@/layouts/BlogLayout';
import { getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx';
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
  const allPosts = await getAllFilesFrontMatter('blog');

  return {
    props: {
      ...post,
      allPosts,
    },
  };
}

const SingleBlogPost = ({ mdxSource, frontMatter, allPosts }) => (
  <BlogLayout frontMatter={frontMatter} allPosts={allPosts}>
    <MDXRemote {...mdxSource} components={MDXComponents} />
  </BlogLayout>
);

export default SingleBlogPost;
