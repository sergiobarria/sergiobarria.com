import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files';

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

export default makeSource({ contentDirPath: 'content', documentTypes: [Post] });
