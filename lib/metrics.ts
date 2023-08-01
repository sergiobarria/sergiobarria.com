import { cache } from 'react';
import { db } from './db/client';
import { posts, type DBPost } from './db/schema';

// NOTE: wrapped in cache to prevent multiple requests, no needed if using fetch
export const getPostsViews = cache(async () => {
    try {
        const result: DBPost[] = await db.select().from(posts);
        const totalViews = result.reduce((acc, post) => acc + post.views, 0);
        return totalViews;
    } catch (err: unknown) {
        console.error(err);
    }
});
