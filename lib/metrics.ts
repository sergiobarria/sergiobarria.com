import { cache } from 'react';
import xata from '@/lib/xata/client';

import { WAKATIME_USER, WAKATIME_API_KEY } from '@/site/config';

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

export const getWakaAllTimeStats = async () => {
    const res = await fetch(
        `https://wakatime.com/api/v1/users/${WAKATIME_USER}/stats/all_time?api_key=${WAKATIME_API_KEY}`
    );

    if (!res.ok) throw new Error('Failed to fetch WakaTime stats');
    const { data } = await res.json();
    return {
        bestDay: data?.best_day,
        dailyAvg: data?.human_readable_daily_average,
        since: data?.human_readable_range,
        topLang: data?.languages[0],
        otherLang: data?.languages[1],
        os: data?.operating_systems[0],
    };
};

export const getWakaStats = async () => {
    const res = await fetch(
        `https://wakatime.com/api/v1/users/${WAKATIME_USER}/all_time_since_today?api_key=${WAKATIME_API_KEY}`
    );

    if (!res.ok) throw new Error('Failed to fetch WakaTime stats');
    const { data } = await res.json();

    return data;
};
