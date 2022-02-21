import React from 'react';

import { IconType } from 'react-icons';

interface Props {
  job: {
    id: number;
    icon: IconType;
    title: string;
    description: string;
  };
}

export default function JobsCard({ job }: Props) {
  return (
    <div
      key={job.id}
      className='flex h-full items-center gap-3 rounded-md border p-2'
    >
      <job.icon size={24} className='flex-1 text-primary' />
      <div className='flex flex-[9] flex-col'>
        <h4>{job.title}</h4>
        <p className='text-sm text-gray-500'>{job.description}</p>
      </div>
    </div>
  );
}
