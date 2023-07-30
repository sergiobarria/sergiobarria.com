export interface SpotifyTrack {
    id: string;
    external_urls: { spotify: string };
    name: string;
    artists: Array<{ name: string }>;
    album: {
        images: Array<{ width: number; height: number; url: string }>;
    };
}
