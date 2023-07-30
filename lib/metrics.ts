import { cache } from 'react';
import xata from '@/lib/xata/client';

// NOTE: wrapped in cache to prevent multiple requests, no needed if using fetch
export const getPostsViews = cache(async () => {
    try {
        const postsViews = await xata.db.posts.select(['id', 'views']).getMany();
        const totalViews = postsViews.reduce((acc, post) => acc + post.views!, 0);

        return totalViews;
    } catch (err: unknown) {
        console.error(err);
    }
});
