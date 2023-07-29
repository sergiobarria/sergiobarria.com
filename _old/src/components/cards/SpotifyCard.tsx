import Image from 'next/image';

import clsx from 'clsx';
import { BsSpotify } from 'react-icons/bs';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

import AnimatedBars from '@/components/misc/AnimatedBars';

import { SpotifyData } from '@/types/SpotifyTypes';

export default function SpotifyCard() {
  const { data } = useSWR<SpotifyData>('/api/now-playing', fetcher);

  return (
    <a
      href={
        data?.isPlaying
          ? data.songUrl
          : 'https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig'
      }
      className={clsx(
        'relative flex items-center space-x-4 p-2 transition-shadow',
        'w-72 rounded-md border hover:shadow-md'
      )}
    >
      <div>
        {data?.isPlaying ? (
          <Image
            src={data?.albumImageUrl}
            alt={data?.album}
            width={60}
            height={60}
            className='w-16 shadow-sm'
          />
        ) : (
          <BsSpotify className='h-12 w-12 text-[#1ED760]' />
        )}
      </div>

      <div className='flex-1'>
        <p className='component font-bold'>
          {data?.isPlaying ? data?.title : 'Not Listening'}
        </p>
        <div className='font-gray-900 flex items-center justify-between text-xs'>
          {data?.isPlaying ? (
            <>
              <span>{data.artist}</span>

              <span>
                <AnimatedBars />
              </span>
            </>
          ) : (
            'Spotify'
          )}
        </div>
      </div>
    </a>
  );
}
