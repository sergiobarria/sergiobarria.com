import React, { PropsWithChildren } from 'react';

import { NextSeo } from 'next-seo';

import type { Project } from '.contentlayer/types';
import CloudinaryImage from '../CloudinaryImage';
import Divider from '../Divider';
import ReturnLink from '../ReturnLink';
import TextBodyContainer from '../TextBodyContainer';

export default function ProjectLayout({
  children,
  project,
}: PropsWithChildren<{ project: Project }>) {
  return (
    <>
      <NextSeo />
      <div className='my-10 layout'>
        <ReturnLink href='/portfolio' />
        <CloudinaryImage
          publicId={`sergiobarria/projects/${project.banner}`}
          alt='project cover'
          width={1200}
          height={720}
        />
        <h2 className='mt-4'>{project.name}</h2>
        <p className='mt-4 prose max-w-none'>{project.description}</p>
        <Divider />
        <TextBodyContainer>{children}</TextBodyContainer>
      </div>
    </>
  );
}
