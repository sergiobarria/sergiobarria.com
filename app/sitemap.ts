import type { MetadataRoute } from 'next';

import { allPosts, allSnippets } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = allPosts.map(post => ({
        url: `https://sergiobarria.com/blog/${post.slug}`,
        lastModified: post.publishedAt,
    }));

    const snippets = allSnippets.map(snippet => ({
        url: `https://sergiobarria.com/snippets/${snippet.slug}`,
    }));

    const routes = ['', '/blog', '/about', '/showcase', '/dashboard'].map(route => ({
        url: `https://sergiobarria.com${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...posts, ...routes, ...snippets];
}
