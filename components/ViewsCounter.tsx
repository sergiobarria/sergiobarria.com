'use client';

import { useEffect } from 'react';

import { incrementViewsCount } from '@/lib/actions';

interface ViewsCounterProps {
    slug: string;
    views: number;
    track?: boolean;
}

export function ViewsCounter({ slug, views, track }: ViewsCounterProps) {
    console.log('VIEWS COUNTER: ', { slug, views, track });

    useEffect(() => {
        if (track) incrementViewsCount(slug);
    }, [slug, track]);

    return <span>{views} views</span>;
}
