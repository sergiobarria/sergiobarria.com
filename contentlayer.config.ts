import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const computedFields = {
    slug: {
        type: 'string',
        resolve: doc =>
            doc._raw.flattenedPath
                .split('/')
                .slice(-1)[0]
                .replace(/\.mdx$/, ''),
    },
    url: { type: 'string', resolve: post => post._raw.flattenedPath },
} satisfies ComputedFields;

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: '**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'date', required: true },
        summary: { type: 'string', required: true },
        image: { type: 'string', required: false },
        isFeatured: { type: 'boolean', required: false, default: false },
        isArchived: { type: 'boolean', required: false, default: false },
        keywords: { type: 'list', of: { type: 'string' }, required: false },
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
