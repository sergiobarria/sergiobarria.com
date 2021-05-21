import fs from 'fs';
import path from 'path';
import mdxPrism from 'mdx-prism';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import MDXComponents from '@/components/MDXComponents';

const root = process.cwd();
const postsDirectory = path.join(root, 'data/blog');

// Reads all files from the data/blog directory
export function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type));
}

// Read each file and retreive data and content
export function getFileData(file) {
  const filePath = path.join(postsDirectory, file);
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
    components: MDXComponents,
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

export function getAllFilesFrontMatter() {
  const postsFiles = getFiles('blog');

  // Filter posts files to remove files with .md extension
  const filteredFiles = postsFiles.filter(postFile =>
    postFile.includes('.mdx')
  );

  // Reading and sorting all posts by their id from higher to lower id
  const allPosts = filteredFiles
    .map(file => getFileData(file))
    .sort((postA, postB) => (postB.id > postA.id ? 1 : -1));

  return {
    allPosts,
  };
}
