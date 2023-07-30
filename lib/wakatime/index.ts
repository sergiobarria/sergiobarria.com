import { WAKATIME_USER, WAKATIME_API_KEY } from '@/site/config';
import type { Wakatime, WakatimeAllTime } from './types';

export const getWakaAllTimeStats = async () => {
    const res = await fetch(
        `https://wakatime.com/api/v1/users/${WAKATIME_USER}/stats/all_time?api_key=${WAKATIME_API_KEY}`
    );

    if (!res.ok) throw new Error('Failed to fetch WakaTime stats');
    const { data } = (await res.json()) as { data: WakatimeAllTime };

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
    const { data } = (await res.json()) as { data: Wakatime };

    return data;
};
