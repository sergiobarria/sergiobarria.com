import React from 'react';

import clsx from 'clsx';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

import type { TopSpotifyTracks, Track } from '@/types/SpotifyTypes';

export default function TopSpotifyTracks() {
  const { data } = useSWR<TopSpotifyTracks>('/api/top-spotify-tracks', fetcher);

  if (!data) return null;

  return (
    <div>
      {data.tracks.map((track: Track, index: number) => (
        <div
          key={track.id}
          className={clsx(
            'flex items-baseline border-b border-gray-200 dark:border-gray-800',
            'mt-8 w-full max-w-3xl'
          )}
        >
          <span className='text-sm font-bold text-gray-400 dark:text-gray-600'>
            {index + 1}
          </span>
          <div className='flex flex-col pl-3'>
            <a
              href={track.songUrl}
              className={clsx(
                'w-60 truncate font-medium text-gray-900 dark:text-gray-200',
                'sm:w-96 md:w-full'
              )}
              target='_blank'
              rel='noopener noreferrer'
            >
              {track.title}
            </a>
            <p className='mb-4 w-60 truncate text-gray-500 sm:w-96 md:w-full'>
              {track.artists}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
