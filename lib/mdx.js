import fs from 'fs';
import path from 'path';
import mdxPrism from 'mdx-prism';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();
const postsDirectory = path.join(root, 'data/blog');

// Reads all files from the data/blog directory
export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
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

export function getAllFilesFrontMatter() {
  const postsFiles = getPostsFiles();

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
