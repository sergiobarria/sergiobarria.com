import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

import { formatDate } from '@/lib/utils';
import { RenderMdx, ViewsCounter } from '@/components';
import { getPostsViews } from '@/lib/metrics';
import { allPosts } from 'contentlayer/generated';

type MetadataProps = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

// TODO: finish this metadata function logic
export async function generateMetadata(
    { params, searchParams }: MetadataProps,
    parent: ResolvingMetadata
): Promise<Metadata | undefined> {
    const { slug } = params;

    return {};
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = allPosts.find(post => post.slug === params.slug);

    if (!post) notFound();

    const { title, publishedAt, slug, readingTime } = post;
    const postsViews = await getPostsViews();
    const views = postsViews.find(p => p.slug === slug)?.views ?? 0;

    return (
        <section>
            <h1 className="font-bold text-2xl tracking-tighter">
                <Balancer>{title}</Balancer>
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm text-neutral-600">
                <p className="text-sm">{formatDate(new Date(publishedAt))}</p>
                <p>
                    <ViewsCounter slug={slug} views={views} track />
                    <span className="mx-3 text-neutral-600">|</span>
                    <span>{readingTime.text}</span>
                </p>
            </div>
            <RenderMdx code={post.body.code} />
        </section>
    );
}
