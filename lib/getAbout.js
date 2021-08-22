import fs from 'fs';
import path from 'path';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import MDXComponents from '@/components/utils/MDXComponents';

const root = process.cwd();

export async function getAboutContent() {
  const fileName = fs.readdirSync(path.join(root, 'data/about'));
  const fileContent = fs.readFileSync(
    path.join(root, 'data/about', fileName[0]),
    'utf-8'
  );
  const { data, content } = matter(fileContent);

  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      rehypePlugins: [mdxPrism],
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
    },
  });

  return {
    frontMatter: {
      readingTime: readingTime(content),
      wordCount: content.split(/\s+/gu).length,
      ...data,
    },
    mdxSource,
  };
}
