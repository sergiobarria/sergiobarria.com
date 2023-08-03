import Link from 'next/link';
import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';

import { getPostsViews } from '@/lib/metrics';
import { formatDate } from '@/lib/utils';
import { ViewsCounter } from '@/components';
import { type Post, allPosts } from 'contentlayer/generated';

// TODO: finish this metadata function logic
export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read my thoughts on various topics related to software development',
};

async function PostPreview({ post }: { post: Post & { views: number } }) {
    const { title, publishedAt, slug, views, readingTime } = post;

    return (
        <div className="py-3">
            <Link
                href={`/blog/${slug}`}
                className="group transition-colors duration-200 ease-in-out"
            >
                <h3 className="group-hover:opacity-80">{title}</h3>
                <p className="flex text-neutral-400 text-sm">
                    <span>{formatDate(new Date(publishedAt))}</span>
                    <span className="mx-3 ">|</span>
                    <ViewsCounter slug={slug} views={views} />
                    <span className="mx-3 ">|</span>
                    <span>{readingTime.text}</span>
                </p>
            </Link>
        </div>
    );
}

export default async function BlogPage() {
    const postsData = allPosts
        .filter(post => !post.isArchived)
        .sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));
    const postsViews = await getPostsViews();

    const posts = postsData.map(post => ({
        ...post,
        views: postsViews.find(p => p.slug === post.slug)?.views ?? 0,
    }));

    return (
        <section>
            <h1 className="font-bold text-2xl tracking-tighter">check out my blog! 📝</h1>
            <p className="mb-8 mt-1">
                In total, I&apos;ve written {posts.length} articles. You can find them all below.
            </p>

            {posts.map(post => (
                <PostPreview key={post._id} post={post} />
            ))}
        </section>
    );
}
