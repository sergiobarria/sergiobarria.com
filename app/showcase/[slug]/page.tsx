import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

import { RenderMdx, ViewsCounter } from '@/components';
import { getSnippetsViews } from '@/lib/metrics';
import { allSnippets } from 'contentlayer/generated';

export default async function SnippetPage({ params }: { params: { slug: string } }) {
    const snippet = allSnippets.find(snippet => snippet.slug === params.slug);

    if (!snippet) notFound();

    const snippetViews = await getSnippetsViews();
    const { title, readingTime, slug } = snippet;
    const views = snippetViews.find(view => view.slug === slug)?.views || 0;

    return (
        <section>
            <h1 className="font-bold text-2xl tracking-tighter">
                <Balancer>{title}</Balancer>
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm text-neutral-600">
                <ViewsCounter slug={slug} views={views} type="snippets" track />

                <span>{readingTime.text}</span>
            </div>
            <RenderMdx code={snippet.body.code} />
        </section>
    );
}
