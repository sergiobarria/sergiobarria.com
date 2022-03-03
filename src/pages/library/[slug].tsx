import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { allSnippets, Snippet } from 'contentlayer/generated';

import components from '@/components/misc/MDXComponents';

import SnippetLayout from '@/layouts/SnippetLayout';

export async function getStaticPaths() {
  return {
    paths: allSnippets.map((s: Snippet) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug;

  const snippet = allSnippets.find((snippet: Snippet) => snippet.slug === slug);

  return {
    props: {
      snippet,
    },
  };
}

export default function SnippetPage({
  snippet,
}: InferGetStaticPropsType<GetStaticProps>) {
  const Component = useMDXComponent(snippet?.body.code);

  return (
    <SnippetLayout snippet={snippet}>
      <Component components={{ ...(components as any) }} />
    </SnippetLayout>
  );
}
