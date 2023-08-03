import Image from 'next/image';

import { getTopTracks } from '@/lib/spotify';
import type { Track } from '@/lib/spotify';

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
            <Image
                src={images.at(0)?.url ?? ''}
                width={30}
                height={30}
                alt={title}
                className="w-8 h-8"
            />
        </li>
    );
}

export async function SpotifyTopTracks() {
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

export function SpotifyTopTracksFallback() {
    return (
        <ul className="gap-4 columns-1 md:columns-2">
            {Array.from({ length: 10 }, (_, i) => (
                <li key={i} className="flex items-center p-2 border-b border-neutral-800">
                    <span className="mr-2 text-xs text-neutral-500">{i + 1}</span>
                    <div className="flex-grow w-[200px] space-y-3 pr-3">
                        <span className="block animate-pulse bg-neutral-500 h-2"></span>
                        <span className="block w-1/3 animate-pulse bg-neutral-500 h-2"></span>
                    </div>
                    <div className="w-8 h-8 animate-pulse bg-neutral-500"></div>
                </li>
            ))}
        </ul>
    );
}
