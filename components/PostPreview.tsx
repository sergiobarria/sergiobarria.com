import Link from 'next/link';

import { formatDate } from '@/lib/utils';
import { ArrowUpRight } from './icons/ArrowUpRight';
import { type Post } from 'contentlayer/generated';

interface PostPreviewProps {
    post: Post;
}

export async function PostPreview({ post }: PostPreviewProps) {
    const { title, publishedAt, url, slug } = post;
    // const views = await getViewsCount();
    // console.log({ views, url, slug });

    return (
        <div className="border-b border-neutral-600 py-3">
            <Link href={`/blog/${slug}`} className="flex items-center justify-between gap-2">
                <div>
                    <h3 className="font-semibold group-hover:opacity-80">{title}</h3>
                    <p className="flex gap-x-3 py-1 opacity-80 text-sm divide-x divide-neutral-600">
                        <span>{formatDate(new Date(publishedAt))}</span>
                        <span className="pl-3">{formatDate(new Date(publishedAt))}</span>
                    </p>
                </div>
                <div>
                    <ArrowUpRight />
                </div>
            </Link>
        </div>
    );
}
