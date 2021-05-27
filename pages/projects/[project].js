import { MDXRemote } from 'next-mdx-remote';

import ProjectLayout from '@/layouts/ProjectLayout';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';

export async function getStaticPaths() {
  const projects = getFiles('projects');

  return {
    paths: projects.map(p => ({
      params: {
        project: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = await getFileBySlug('projects', params.project);

  return {
    props: {
      ...project,
    },
  };
}

const SingleProject = ({ mdxSource, frontMatter }) => (
  <ProjectLayout frontMatter={frontMatter}>
    <MDXRemote {...mdxSource} components={MDXComponents} />
  </ProjectLayout>
);

export default SingleProject;
