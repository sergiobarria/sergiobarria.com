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
