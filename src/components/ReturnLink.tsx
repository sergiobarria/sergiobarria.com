import React from 'react';

import { IoChevronBackCircleSharp } from 'react-icons/io5';

import CustomLink from '@/components/CustomLink';

export default function ReturnLink({ href }: { href: string }) {
  return (
    <CustomLink href={href}>
      <span className='flex items-center mb-3 transition-colors text-primary hover:text-primary/70'>
        <IoChevronBackCircleSharp size={30} className='mr-2 ' />
        <span className='border-b-[2px] border-primary/50 border-dotted'>
          Back
        </span>
      </span>
    </CustomLink>
  );
}
