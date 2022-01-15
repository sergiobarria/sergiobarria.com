import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import SnippetLayout from '@/components/layout-pages/SnippetLayout';
import components from '@/components/MDXComponents';

import { allSnippets } from '.contentlayer/data';
import type { Snippet } from '.contentlayer/types';

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
      <div className='layout'>
        <Component components={{ ...(components as any) }} />
      </div>
    </SnippetLayout>
  );
}
