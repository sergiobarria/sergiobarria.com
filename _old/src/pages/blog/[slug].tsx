import { GetStaticPropsContext } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { allPosts, Post } from 'contentlayer/generated';

import components from '@/components/misc/MDXComponents';

import BlogPostLayout from '@/layouts/BlogPostLayout';

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug;
  const post = allPosts.find((post) => post.slug === slug);

  return {
    props: {
      post,
    },
  };
}

export default function PostPage({ post }: { post: Post }) {
  const Component = useMDXComponent(post?.body.code);

  return (
    <BlogPostLayout post={post}>
      <Component components={{ ...(components as any) }} />
    </BlogPostLayout>
  );
}
