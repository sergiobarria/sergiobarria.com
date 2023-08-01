import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

import { allPosts } from '@/.contentlayer/generated';
import { formatDate } from '@/lib/utils';
import { RenderMdx } from '@/components';

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

type PageProps = { params: { slug: string } };

export default function PostPage({ params }: PageProps) {
    const post = allPosts.find(post => post.slug === params.slug);

    if (!post) notFound();

    const { title, publishedAt } = post;

    console.log({ params });
    return (
        <section>
            <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
                <Balancer>{title}</Balancer>
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px] text-neutral-600">
                <p className="text-sm">{formatDate(new Date(publishedAt))}</p>
                <span>0 views</span>
                {/* TODO: Add views counter */}
                {/* <ViewCounter allViews={allViews} slug={post.slug} trackView /> */}
            </div>
            <RenderMdx code={post.body.code} />
        </section>
    );
}
