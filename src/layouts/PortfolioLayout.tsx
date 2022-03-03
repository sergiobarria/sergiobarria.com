import React, { PropsWithChildren } from 'react';

import { NextSeo } from 'next-seo';

import { Project } from 'contentlayer/generated';

import { Main } from '@/components/base';
import CloudinaryImage from '@/components/CloudinaryImage';
import ReturnLink from '@/components/links/ReturnLink';
import Divider from '@/components/misc/Divider';
import TextBodyContainer from '@/components/TextBodyContainer';

export default function ProjectLayout({
  children,
  project,
}: PropsWithChildren<{ project: Project }>) {
  return (
    <>
      <NextSeo />
      <Main>
        <ReturnLink href='/portfolio' />
        <CloudinaryImage
          publicId={`sergiobarria/projects/${project.banner}`}
          alt='project cover'
          width={1200}
          height={720}
        />
        <h2 className='mt-4'>{project.name}</h2>
        <p className='prose mt-4 max-w-none'>{project.description}</p>
        <Divider />
        <TextBodyContainer>{children}</TextBodyContainer>
      </Main>
    </>
  );
}
