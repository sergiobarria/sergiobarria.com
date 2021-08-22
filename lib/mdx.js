import fs from 'fs';
import path from 'path';
import mdxPrism from 'mdx-prism';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';

import MDXComponents from '@/components/utils/MDXComponents';

const root = process.cwd();
const postsDirectory = path.join(root, 'data');

// Reads all files from the data/blog directory
export function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type));
}

// Read each file and retreive data and content
export function getFileData(type, file) {
  const filePath = path.join(postsDirectory, type, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  const postData = {
    ...data,
  };

  return postData;
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf-8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf-8');

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export function getAllFilesFrontMatter(type) {
  const postsFiles = getFiles(type);

  // Filter posts files to remove files with .md extension
  const filteredFiles = postsFiles.filter(postFile =>
    postFile.includes('.mdx')
  );

  // Reading and sorting all posts by their id from higher to lower id
  const allFiles = filteredFiles
    .map(file => getFileData(type, file))
    .sort((postA, postB) => (postB.id > postA.id ? 1 : -1));

  return {
    allFiles,
  };
}
