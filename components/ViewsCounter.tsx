'use client';

import { useEffect } from 'react';

import { incrementCountAction } from '@/lib/actions';

interface ViewsCounterProps {
    slug: string;
    views: number;
    track?: boolean;
}

export function ViewsCounter({ slug, views, track }: ViewsCounterProps) {
    useEffect(() => {
        if (track) incrementCountAction(slug);
    }, [slug, track]);

    return <span>{views} views</span>;
}
