import { useEffect } from 'react';

import NextImage from 'next/image';

import clsx from 'clsx';
import { animate } from 'motion';
import { BsSpotify } from 'react-icons/bs';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

import { NowPlayingSong } from '@/types/interfaces';

function AnimatedBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)',
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
  }, []);

  return (
    <div className='flex w-auto items-end overflow-hidden'>
      <span
        id='bar1'
        className='mr-[3px] h-2 w-1 bg-primary/60 opacity-75 dark:bg-primary/70'
      />
      <span
        id='bar2'
        className='mr-[3px] h-1 w-1 bg-primary/60 dark:bg-primary/70'
      />
      <span
        id='bar3'
        className='h-3 w-1 bg-primary/60 opacity-80 dark:bg-primary/70'
      />
    </div>
  );
}

export default function SpotifyCard() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

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
          <NextImage
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
          {data?.isPlaying ? data.title : 'Not Listening'}
        </p>
        <div className='font-gray-900 flex items-center justify-between text-xs'>
          {data?.isPlaying ? (
            <>
              <span>{data?.artist}</span>

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
