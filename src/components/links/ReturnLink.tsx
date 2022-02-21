import React from 'react';

import { IoChevronBackCircleSharp } from 'react-icons/io5';

import CustomLink from '@/components/links/CustomLink';

export default function ReturnLink({ href }: { href: string }) {
  return (
    <CustomLink href={href}>
      <span className='mb-3 flex items-center text-primary transition-colors hover:text-primary/70'>
        <IoChevronBackCircleSharp size={30} className='mr-2 ' />
        <span className='border-b-[2px] border-dotted border-primary/50'>
          Back
        </span>
      </span>
    </CustomLink>
  );
}
