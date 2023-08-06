import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } from '@/site/config';

export interface SpotifyTrack {
    id: string;
    external_urls: { spotify: string };
    name: string;
    artists: Array<{ name: string }>;
    album: {
        images: Array<{ width: number; height: number; url: string }>;
    };
}

export interface Track {
    id: string;
    songUrl: string;
    artists: string;
    title: string;
    images: Array<{ width: number; height: number; url: string }>;
}

export interface SpotifyResponse {
    is_playing: boolean;
    item: {
        name: string;
        album: {
            name: string;
            artists: Array<{ name: string }>;
            images: [{ url: string }];
        };
        external_urls: {
            spotify: string;
        };
    };
    currently_playing_type: string;
}

export interface SpotifyData {
    isPlaying: boolean;
    title: string;
    album: string;
    artist: string;
    albumImageUrl: string;
    songUrl: string;
}

const token = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

async function getAccessToken() {
    const data = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN as string,
    }).toString();

    const res = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
        cache: 'no-cache',
    });

    const json: { access_token: string } = await res.json();
    return json.access_token;
}

export async function getTopTracks() {
    try {
        const accessToken = await getAccessToken();
        const url = TOP_TRACKS_ENDPOINT + '?time_range=short_term&limit=10';

        const res = await fetch(url, {
            headers: { Authorization: `Bearer ${accessToken}` },
            next: { revalidate: 3600 * 24 }, // 24 hours
        });

        if (!res.ok) throw new Error('Failed to fetch spotify top tracks');

        const { items } = (await res.json()) as { items: SpotifyTrack[] };
        const tracks = items.map(track => ({
            artists: track.artists.map((_artist: any) => _artist.name).join(', '),
            songUrl: track.external_urls.spotify,
            title: track.name,
            id: track.id,
            images: track?.album?.images,
            // NOTE: return track to see all available data
            // track: track
        }));

        return tracks;
    } catch (error) {
        console.error('💥 ERROR', error);
        return [];
    }
}

export async function getNowPlaying() {
    try {
        const accessToken = await getAccessToken();
        const res = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: { Authorization: `Bearer ${accessToken}` },
            cache: 'no-store',
        });

        if (!res.ok) throw new Error('Failed to fetch spotify now playing');

        if (res.status === 204 || res.status > 400) return null;

        const json: SpotifyResponse = await res.json();
        const data = {
            isPlaying: json.is_playing,
            title: json.item.name,
            album: json.item.album.name,
            artist: json?.item?.album?.artists?.map(artist => artist.name).join(', '),
            albumImageUrl: json.item.album.images[0].url,
            songUrl: json.item.external_urls.spotify,
        };

        return data;
    } catch (err) {
        console.error('💥 ERROR', err);
        return null;
    }
}
