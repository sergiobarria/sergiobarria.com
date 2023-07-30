import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: '**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'date', required: true },
        summary: { type: 'string', required: true },
        coverImage: { type: 'string', required: true },
        isFeatured: { type: 'boolean', required: false, default: false },
        archived: { type: 'boolean', required: false, default: false },
    },
    computedFields: {
        url: { type: 'string', resolve: post => post._raw.flattenedPath },
    },
}));

export default makeSource({ contentDirPath: 'content', documentTypes: [Post] });
