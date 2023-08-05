import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

import { cn, formatDate } from '@/lib/utils';
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

type Heading = {
    slug: string;
    text: string;
    level: number;
};

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = allPosts.find(post => post.slug === params.slug);

    if (!post) notFound();

    const { title, publishedAt, slug, readingTime, headings, toc } = post;
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
            {toc && <TableOfContents headings={headings} />}
            <RenderMdx code={post.body.code} />
        </section>
    );
}

function TableOfContents({ headings }: { headings: Heading[] }) {
    return (
        <div>
            <h2 className="text-2xl font-semibold">On this page</h2>
            <ul>
                {headings.map(({ slug, level, text }: Heading) => (
                    <li
                        key={`#${slug}`}
                        className={cn({
                            'ml-0': level === 2,
                            'ml-4': level === 3,
                            'ml-8': level === 4,
                        })}
                    >
                        <Link
                            href={`#${slug}`}
                            className="py-1 text-gray-400 hover:text-white transition duration-200"
                        >
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
