import Link from 'next/link';

import { format, parseISO } from 'date-fns';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import { ReadTimeResults } from 'reading-time';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

import { IViews } from '@/types/interfaces';

interface IProps {
  post: IPostPreview;
  isLast?: boolean;
}

interface IPostPreview {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  readingTime: ReadTimeResults;
  views?: string;
  summary: string;
}

export default function BlogPostCard({ post, isLast }: IProps) {
  const { data } = useSWR<IViews>(`/api/views/${post.slug}`, fetcher);
  const views = data?.total;

  const formattedDate = format(parseISO(post.publishedAt), 'MMMM dd, yyyy');

  return (
    <article className='mt-8'>
      <div className='flex items-center gap-1 text-gray-500'>
        <div>
          <span>{formattedDate}</span>
          <span className='mx-2 text-gray-300'>|</span>
        </div>
        <div className='flex items-center gap-1'>
          <HiOutlineClock />
          <span>{post.readingTime.text}</span>
          <span className='mx-2 text-gray-300'>|</span>
        </div>
        <div className='flex items-center gap-1'>
          <HiOutlineEye />
          {views ? new Number(views).toLocaleString() : '---'} views
        </div>
      </div>
      <h3 className='transition-all duration-300 hover:text-gray-700 hover:scale-[1.01] dark:text-gradient'>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className='mt-2 text-long'>{post.summary}</p>
      <hr className={`my-4 ${isLast ? 'hidden' : ''}`} />
    </article>
  );
}
