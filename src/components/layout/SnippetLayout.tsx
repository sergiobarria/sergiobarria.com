import { PropsWithChildren } from 'react';

import Layout from './Layout';
import { Snippet } from '.contentlayer/types';

export default function SnippetLayout({
  children,
  snippet,
}: PropsWithChildren<{ snippet: Snippet }>) {
  return (
    <Layout>
      <div className='my-10 layout'>
        <h1 className='mb-4'>{snippet.title}</h1>

        <section className='prose max-w-none dark:prose-invert prose-li:marker:text-green-400 prose-li:marker:text-lg prose-a:no-underline'>
          {children}
        </section>
      </div>
    </Layout>
  );
}
