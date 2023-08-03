import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import readingTime from 'reading-time';

function slugify(text: string) {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-'); // Replace multiple - with single -
}

const computedFields = {
    slug: {
        type: 'string',
        resolve: doc => {
            // NOTE: use this when we have multiple languages
            // const lang = doc._raw.flattenedPath.split('/')[1];
            const fileName = doc._raw.flattenedPath.split('/').slice(-1)[0];
            const slug = fileName.split('.')[0].split('_')[1];
            return slug;
        },
    },
    url: { type: 'string', resolve: post => post._raw.flattenedPath },
    readingTime: {
        type: 'json',
        resolve: doc => readingTime(doc.body.raw, { wordsPerMinute: 300 }),
    },
    headings: {
        type: 'json',
        resolve: async doc => {
            const regex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;

            return Array.from(doc.body.raw.matchAll(regex)).map((match: any) => {
                const groups = match.groups;
                const flag = groups?.flag;
                const content = groups?.content as string;
                return {
                    level: (flag ? flag.length : 0) as number,
                    text: content || '',
                    slug: slugify(content),
                };
            });
        },
    },
} satisfies ComputedFields;

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: '**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'date', required: true },
        summary: { type: 'string', required: false },
        image: { type: 'string', required: false },
        isFeatured: { type: 'boolean', required: false, default: false },
        isArchived: { type: 'boolean', required: false, default: false },
        keywords: { type: 'list', of: { type: 'string' }, required: false },
        isDraft: { type: 'boolean', required: false, default: false },
        toc: { type: 'boolean', required: false, default: true },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    // NOTE: other themes at https://unpkg.com/browse/shiki@0.14.2/themes/
                    theme: 'poimandres',
                    // theme: 'rose-pine-moon',
                    onVisitLine(node: any) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: 'text', value: ' ' }];
                        }
                    },
                    onVisitHighlightedLine(node: any) {
                        node.properties.className.push('line--highlighted');
                    },
                    onVisitHighlightedWord(node: any) {
                        node.properties.className = ['word--highlighted'];
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['anchor'],
                    },
                },
            ],
        ],
    },
});
