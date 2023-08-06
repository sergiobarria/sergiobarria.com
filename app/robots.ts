import type { MetadataRoute } from 'next';

// REFERENCE: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
            },
        ],
        sitemap: 'https://sergiobarria.com/sitemap.xml',
        host: 'https://sergiobarria.com',
    };
}
