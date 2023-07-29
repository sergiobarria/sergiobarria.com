import type { NextApiRequest, NextApiResponse } from 'next';

import { getTopTracks } from '@/lib/spotify';

import type { SpotifyTrack } from '@/types/SpotifyTypes';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const response = await getTopTracks();
    const { items } = response.data;

    const tracks = items.map((track: SpotifyTrack) => ({
      artists: track.artists.map((_artist: any) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
      id: track.id,
    }));

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate-43200'
    );

    return res.status(200).json({ tracks });
  }
}
