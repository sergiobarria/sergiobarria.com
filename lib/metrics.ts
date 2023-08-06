import { cache } from 'react';
import { db } from './db/client';
import { posts, snippets, type DBPost } from './db/schema';

// NOTE: wrapped in cache to prevent multiple requests, no needed if using fetch
export const getTotalPostsViews = cache(async () => {
    try {
        const result: DBPost[] = await db.select().from(posts);
        const totalViews = result.reduce((acc, post) => acc + post.views, 0);
        return totalViews;
    } catch (err: unknown) {
        console.error(err);
    }
});

export const getPostsViews = cache(async () => {
    const postsViews: DBPost[] = await db
        .select({
            id: posts.id,
            slug: posts.slug,
            views: posts.views,
            language: posts.language,
        })
        .from(posts);

    return postsViews;
});

export const getSnippetsViews = cache(async () => {
    const snippetsViews = await db
        .select({
            id: snippets.id,
            slug: snippets.slug,
            views: snippets.views,
        })
        .from(snippets);

    return snippetsViews;
});
