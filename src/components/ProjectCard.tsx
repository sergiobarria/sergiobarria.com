import React from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import TechIcons from './TechIcons';
import { TechListType } from './TechIcons';
import type { Project } from '.contentlayer/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link key={project._id} href={`/portfolio/${project.slug}`}>
      <a
        className={clsx(
          'border rounded-md hover:border-2 hover:border-primary',
          'hover:scale-[1.02] transition duration-200 hover:shadow-md'
        )}
      >
        <article className='flex flex-col h-full p-4 '>
          <h4>{project.name}</h4>
          <p className='text-sm text-gray-500 dark:text-gray-300'>
            {project.description}
          </p>
          <div className='flex items-center justify-between pt-3 mt-auto'>
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
