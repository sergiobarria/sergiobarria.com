import Image from 'next/image';

import { getTopTracks } from '@/lib/spotify/spotify';
import type { Track } from '@/lib/spotify/types';
import { Metrics } from '@/components/Metrics';

interface TrackItemProps {
    track: Track;
    index: number;
}

export function TrackItem({ track, index }: TrackItemProps) {
    const { title, artists, images, songUrl } = track;

    return (
        <li className="flex items-center p-2 border-b border-neutral-800">
            <span className="mr-2 text-xs text-neutral-500">{index + 1}</span>
            <div className="flex-grow w-[200px]">
                <a
                    href={songUrl}
                    className="block text-sm text-neutral-100 hover:text-neutral-300 hover:underline truncate"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
                <small className="block text-xs text-neutral-500">{artists}</small>
            </div>
            <div>
                <Image
                    src={images.at(0)?.url ?? ''}
                    width={30}
                    height={30}
                    alt={title}
                    className="w-8 h-8"
                />
            </div>
        </li>
    );
}

export async function TopTracks() {
    const tracks = await getTopTracks();

    return (
        <>
            {tracks?.length > 0 ? (
                <ul className="gap-4 columns-1 md:columns-2">
                    {tracks.map((track, index) => (
                        <TrackItem key={track.id} track={track} index={index} />
                    ))}
                </ul>
            ) : (
                <p className="mt-8 text-center opacity-70">No tracks data available...</p>
            )}
        </>
    );
}

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
                <Metrics />
            </section>

            <section id="top-tracks">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-neutral-300">
                    My Top Spotify Tracks
                </h2>
                <p className="mt-3 mb-6 text-zinc-400">
                    Here is a list of what I&apos;ve been listening latetly.
                </p>
                <TopTracks />
            </section>
        </div>
    );
}
