import React from 'react';

import Link from 'next/link';

import clsx from 'clsx';
import { Project } from 'contentlayer/generated';

import TechIcons from '../TechIcons';
import { TechListType } from '../TechIcons';
import { H4, Paragraph } from '../Typography';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link key={project._id} href={`/portfolio/${project.slug}`}>
      <a
        className={clsx(
          'rounded-md border hover:border-2 hover:border-primary',
          'transition duration-200 hover:scale-[1.02] hover:shadow-md'
        )}
      >
        <article className='flex h-full flex-col p-4 '>
          <H4 className='mb-2'>{project.name}</H4>
          <Paragraph className='text-sm dark:text-gray-300'>
            {project.description}
          </Paragraph>
          <div className='mt-auto flex items-center justify-between pt-3'>
            <TechIcons
              techs={project.techs.split(',') as Array<TechListType>}
              className='text-gray-500'
            />
          </div>
        </article>
      </a>
    </Link>
  );
}
