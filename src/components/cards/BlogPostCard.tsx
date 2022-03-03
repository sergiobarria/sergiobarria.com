import Link from 'next/link';

import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

import { H3, Paragraph } from '@/components/Typography';

import { Views } from '@/types';

interface Props {
  post: Pick<
    Post,
    '_id' | 'title' | 'slug' | 'publishedAt' | 'readingTime' | 'summary'
  >;
  isLast?: boolean;
}

export default function BlogPostCard({ post, isLast }: Props) {
  const { title, slug, publishedAt, readingTime, summary } = post;
  const { data } = useSWR<Views>(`/api/views/${post.slug}`, fetcher);
  const views = data?.total;

  const formattedDate = format(parseISO(publishedAt), 'MMMM dd, yyyy');

  return (
    <article className='mt-8'>
      <div className='flex items-center gap-1 text-sm'>
        <div>
          <span className='text-gray-300'>{formattedDate}</span>
          <span className='mx-2 text-gray-300'>|</span>
        </div>
        <div className='flex items-center gap-1'>
          <HiOutlineClock className='text-gray-300' />
          <span className='text-gray-300'>{readingTime.text}</span>
          <span className='mx-2 text-gray-300'>|</span>
        </div>
        <div className='flex items-center gap-1 text-gray-300'>
          <HiOutlineEye className='text-gray-300' />
          {views ? new Number(views).toLocaleString() : '---'} views
        </div>
      </div>
      <H3 className='transition-all duration-300 hover:scale-[1.01] hover:text-gray-700 dark:text-primary'>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </H3>
      <Paragraph className='mt-2 text-sm md:text-base'>{summary}</Paragraph>
      <hr className={`my-4 ${isLast ? 'hidden' : ''}`} />
    </article>
  );
}
