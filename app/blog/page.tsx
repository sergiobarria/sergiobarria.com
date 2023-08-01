import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';

import { allPosts } from 'contentlayer/generated';
import { PostPreview } from '@/components/PostPreview';
import { getPostsViews } from '@/lib/metrics';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read my thoughts on various topics related to software development',
};

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
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">check out my blog! 📝</h1>

            {posts.map(post => (
                <PostPreview key={post._id} post={post} />
            ))}
        </section>
    );
}
