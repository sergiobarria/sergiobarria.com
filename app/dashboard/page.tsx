import { getTopTracks } from '@/lib/spotify/spotify';
import { getPostsViews, getWakaStats, getWakaAllTimeStats } from '@/lib/metrics';

export function MetricCard() {
    return <div>card</div>;
}

export default async function DashboardPage() {
    const [totalPostsViews, wakaStats, wakaAllTime, topTracks] = await Promise.all([
        getPostsViews(),
        getWakaStats(),
        getWakaAllTimeStats(),
        getTopTracks(),
    ]);

    console.log({ totalPostsViews, wakaStats, wakaAllTime, topTracks });
    return <div>DashboardPage</div>;
}
