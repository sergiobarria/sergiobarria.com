import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const computedFields: ComputedFields = {
  readingTime: {
    type: 'json',
    resolve: (doc: any) => readingTime(doc.body.raw),
  },
  slug: {
    type: 'string',
    resolve: (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    number: { type: 'number', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    banner: { type: 'string', required: true },
    isFeatured: { type: 'boolean', required: true },
    keywords: { type: 'string', required: false },
  },
  computedFields,
}));

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    number: { type: 'number', required: true },
    description: { type: 'string', required: true },
    techs: { type: 'string', required: true },
    banner: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    liveUrl: { type: 'string', required: true },
    repo: { type: 'string', required: true },
    status: { type: 'string', required: true },
    shouldRender: { type: 'boolean', required: true, default: true },
  },
}));

const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: 'library/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'string', required: true },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Post, Project, Snippet],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
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

export default contentLayerConfig;
