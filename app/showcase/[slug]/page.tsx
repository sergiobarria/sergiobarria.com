import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

import { RenderMdx, ViewsCounter } from '@/components';
import { allSnippets } from 'contentlayer/generated';

export default function SnippetPage({ params }: { params: { slug: string } }) {
    const snippet = allSnippets.find(snippet => snippet.slug === params.slug);

    if (!snippet) notFound();

    const { title, readingTime } = snippet;

    return (
        <section>
            <h1 className="font-bold text-2xl tracking-tighter">
                <Balancer>{title}</Balancer>
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm text-neutral-600">
                {/* <ViewsCounter slug={slug} views={views} track /> */}
                <span>views</span>

                <span>{readingTime.text}</span>
            </div>
            <RenderMdx code={snippet.body.code} />
        </section>
    );
}
