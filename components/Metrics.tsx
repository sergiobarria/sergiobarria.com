import { getTotalPostsViews } from '@/lib/metrics';
import { getWakaAllTimeStats, getWakaStats } from '@/lib/wakatime';
import { getGithubUserMetrics } from '@/lib/github';
import { cn, convertTimeToDecimal } from '@/lib/utils';
import { allPosts } from '@/.contentlayer/generated';

import site from '@/site/site.json';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

interface CardProps {
    title: string;
    value: string | number;
    href?: string;
}

function Card({ title, value, href }: CardProps) {
    return (
        <a href={href} className={cn(href && 'cursor-pointer')}>
            <div
                className={cn(
                    'flex flex-col border border-neutral-800 p-3 rounded-md',
                    href && 'hover:bg-neutral-900'
                )}
            >
                <small className="text-ellipsis">{title}</small>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold">{value}</span>
                    {href && <ArrowUpRightIcon />}
                </div>
            </div>
        </a>
    );
}

export async function Metrics() {
    const [totalPostsViews, wakaStats, wakaAllTime, githubStats] = await Promise.all([
        getTotalPostsViews(),
        getWakaStats(),
        getWakaAllTimeStats(),
        getGithubUserMetrics(),
    ]);
    const totalPosts = allPosts.length;
    const wakatime = wakaStats?.text?.split(' ').slice(0, 2).join(' ');
    const dailyAvg = convertTimeToDecimal(wakaAllTime?.dailyAvg);
    const topLang = wakaAllTime?.topLang.name;
    const otherLang = wakaAllTime?.otherLang.name;
    const followers = githubStats?.user?.followers.totalCount;
    const pullRequests = githubStats?.user?.pullRequests.totalCount;
    const githubStars = githubStats?.user?.repositories?.edges?.reduce(
        (acc, { node }) => acc + node?.stargazerCount,
        0
    );
    const {
        socialLinks: { github },
    } = site;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card title="Total Posts" value={totalPosts} href="/blog" />
            <Card title="Total Posts Views" value={totalPostsViews ?? '--'} href="/blog" />

            {/* Github stats */}
            <Card title="GitHub Followers" value={followers ?? '--'} href={github.url} />
            <Card title="Pull Requests" value={pullRequests ?? '--'} href={github.url} />
            <Card title="GitHub Stars" value={githubStars ?? '--'} href={github.url} />

            {/* Wakatime stats */}
            <Card title="Wakatime*" value={wakatime ?? '--'} />
            <Card title="Daily Average*" value={dailyAvg ?? '--'} />
            <Card title="Top Language" value={topLang ?? '--'} />
            <Card title="Other Language" value={otherLang ?? '--'} />
        </div>
    );
}

export function MetricsFallback() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="flex flex-col border border-neutral-800 p-3 space-y-3">
                    <span className="block animate-pulse bg-neutral-500 h-2"></span>
                    <span className="block w-1/3 animate-pulse bg-neutral-500 h-6"></span>
                </div>
            ))}
        </div>
    );
}
