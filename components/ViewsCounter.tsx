'use client';

import { useEffect } from 'react';

import { incrementCountAction } from '@/lib/actions';

interface ViewsCounterProps {
    slug: string;
    views: number;
    track?: boolean;
    type?: 'posts' | 'snippets';
}

export function ViewsCounter({ slug, views, track, type = 'posts' }: ViewsCounterProps) {
    useEffect(() => {
        if (track) incrementCountAction(slug, type);
    }, [slug, track, type]);

    return <span>{views} views</span>;
}
