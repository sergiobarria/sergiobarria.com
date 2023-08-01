import Link from 'next/link';

import { formatDate } from '@/lib/utils';
import { ViewsCounter } from './ViewsCounter';
import { ArrowUpRight } from './ArrowUpRight';
import { type Post } from 'contentlayer/generated';

interface PostPreviewProps {
    post: Post & { views: number };
}

export async function PostPreview({ post }: PostPreviewProps) {
    const { title, publishedAt, slug, views } = post;

    return (
        <div className="border-b border-neutral-600 py-3">
            <Link href={`/blog/${slug}`} className="flex items-center justify-between gap-2">
                <div>
                    <h3 className="font-semibold group-hover:opacity-80">{title}</h3>
                    <p className="flex py-1 opacity-80 text-sm">
                        <span>{formatDate(new Date(publishedAt))}</span>
                        <span className="mx-3 text-neutral-600">|</span>
                        <ViewsCounter slug={slug} views={views} />
                    </p>
                </div>
                <div>
                    <ArrowUpRight />
                </div>
            </Link>
        </div>
    );
}
