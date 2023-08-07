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
            const withoutCode = doc.body.raw.replace(/```[\s\S]*?```/g, '');
            const headings = withoutCode.match(/#{1,6}\s+.+/g) || [];

            return headings.map((heading: any) => {
                const level = heading.match(/#/g)?.length || 0;
                const text = heading.replace(/#/g, '').trim();
                return {
                    level,
                    text,
                    slug: slugify(text),
                };
            });
        },
    },
} satisfies ComputedFields;

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: 'posts/**/*.mdx',
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

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: 'projects/**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        stack: { type: 'list', of: { type: 'string' }, required: true },
        cover: { type: 'string', required: true },
        isFeatured: { type: 'boolean', required: false, default: false },
        isArchived: { type: 'boolean', required: false, default: false },
        isDraft: { type: 'boolean', required: false, default: true },
        live: { type: 'string', required: true },
        github: { type: 'string', required: true },
    },
    computedFields,
}));

export const Snippet = defineDocumentType(() => ({
    name: 'Snippet',
    filePathPattern: 'snippets/**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: false },
        tags: { type: 'list', of: { type: 'string' }, required: false },
        isDraft: { type: 'boolean', required: false, default: false },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Post, Snippet, Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: 'poimandres',
                    tokensMap: {
                        // VScode command palette: Inspect Editor Tokens and Scopes
                        // https://github.com/Binaryify/OneDark-Pro/blob/47c66a2f2d3e5c85490e1aaad96f5fab3293b091/themes/OneDark-Pro.json
                        fn: 'entity.name.function',
                        objKey: 'meta.object-literal.key',
                    },
                    onVisitLine(node: any) {
                        // Prevent lines from collapsing in `display: grid` mode, and
                        // allow empty lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: 'text', value: ' ' }];
                        }
                        node.properties.className = [''];
                    },
                    // onVisitHighlightedLine(node) {
                    //     node.properties.className.push(HIGHLIGHTED_LINE);
                    // },
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
