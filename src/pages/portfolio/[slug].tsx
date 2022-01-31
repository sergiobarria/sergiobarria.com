import React from 'react';

import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import ProjectLayout from '@/components/layout-pages/ProjectLayout';
import components from '@/components/MDXComponents';

import { allProjects } from '.contentlayer/data';
import type { Project } from '.contentlayer/types';

export async function getStaticPaths() {
  return {
    paths: allProjects.map((p: Project) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug;

  const project = allProjects.find((project: Project) => project.slug === slug);

  return {
    props: {
      project,
    },
  };
}

export default function ProjectPage({
  project,
}: InferGetStaticPropsType<GetStaticProps>) {
  const Component = useMDXComponent(project?.body.code);
  // console.log(project);

  return (
    <ProjectLayout project={project}>
      <div className='layout'>
        <Component components={{ ...(components as any) }} />
      </div>
    </ProjectLayout>
  );
}
