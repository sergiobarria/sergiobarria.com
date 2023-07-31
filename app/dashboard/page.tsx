import { Suspense } from 'react';
import Image from 'next/image';

import { getTopTracks } from '@/lib/spotify/spotify';
import type { Track } from '@/lib/spotify/types';
import { Metrics, MetricsFallback, SpotifyTopTracks, SpotifyTopTracksFallback } from '@/components';

export default async function DashboardPage() {
    return (
        <div className="space-y-12">
            <header className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-300">Dashboard</h1>
                <p className="text-zinc-400">
                    Here I can track different metrics by collecting data from some of the platforms
                    I use. That way I can see my personal coding stats, habits, progress...
                </p>
            </header>

            <section id="metrics">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-neutral-300">Metrics</h2>
                <Suspense fallback={<MetricsFallback />}>
                    <Metrics />
                </Suspense>
            </section>

            <section id="top-tracks">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-neutral-300">
                    My Top Spotify Tracks
                </h2>
                <p className="mt-3 mb-6 text-zinc-400">
                    Here is a list of what I&apos;ve been listening latetly.
                </p>
                <Suspense fallback={<SpotifyTopTracksFallback />}>
                    <SpotifyTopTracks />
                </Suspense>
            </section>
        </div>
    );
}
