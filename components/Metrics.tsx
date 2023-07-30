import { getPostsViews } from '@/lib/metrics';
import { getWakaAllTimeStats, getWakaStats } from '@/lib/wakatime';
import { getGithubUserMetrics } from '@/lib/github';
import { allPosts } from '@/.contentlayer/generated';
import { cn, convertTimeToDecimal } from '@/lib/utils';

import site from '@/site/site.json';

interface CardProps {
    title: string;
    value: string | number;
    href?: string;
}

function Card({ title, value, href }: CardProps) {
    return (
        <a href={href} className={cn(href && 'cursor-pointer')}>
            <div className={cn('flex flex-col bg-neutral-800 p-3', href && 'hover:bg-neutral-900')}>
                <small className="text-ellipsis">{title}</small>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold">{value}</span>
                    {href && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 icon icon-tabler icon-tabler-arrow-up-right"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M17 7l-10 10" />
                            <path d="M8 7l9 0l0 9" />
                        </svg>
                    )}
                </div>
            </div>
        </a>
    );
}

export async function Metrics() {
    const [totalPostsViews, wakaStats, wakaAllTime, githubStats] = await Promise.all([
        getPostsViews(),
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

    console.log({ github });

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-3">
            <Card title="Total Posts" value={totalPosts} href="/blog" />
            <Card title="Total Posts Views" value={totalPostsViews ?? '--'} href="/blog" />

            {/* Wakatime stats */}
            <Card title="Wakatime*" value={wakatime ?? '--'} />
            <Card title="Daily Average*" value={dailyAvg ?? '--'} />
            <Card title="Top Language" value={topLang ?? '--'} />
            <Card title="Other Language" value={otherLang ?? '--'} />

            {/* Github stats */}
            <Card title="GitHub Followers" value={followers ?? '--'} href={github.url} />
            <Card title="Pull Reuquests" value={pullRequests ?? '--'} href={github.url} />
            <Card title="GitHub Stars" value={githubStars ?? '--'} href={github.url} />
        </div>
    );
}