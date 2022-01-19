import { PropsWithChildren } from 'react';

import { NextSeo } from 'next-seo';

import { format } from 'date-fns';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import { IoChevronBackCircleSharp } from 'react-icons/io5';

import CustomLink from '@/components/CustomLink';

import { Post } from '.contentlayer/types';
import CloudinaryImage from '../CloudinaryImage';
import ViewCounter from '../ViewCounter';

export default function BlogPostLayout({
  children,
  post,
}: PropsWithChildren<{ post: Post }>) {
  const formattedDate = format(new Date(post.publishedAt), 'MMMM dd, yyyy');

  const keywords = post.keywords ?? undefined;

  const customMetadata = {
    title: `Blog - ${post.title}`,
    canonical: `https://sergiobarria.com/blog/${post.slug}`,
    description: post.summary,
    openGraph: {
      url: `https://sergiobarria.com/blog/${post.slug}`,
      type: 'article',
      images: [
        {
          url: `https://res.cloudinary.com/sbarria-dev/image/upload/v1642051590/sergiobarria/banners/${post.banner}`,
          width: 800,
          height: 800,
          alt: 'Og Banner',
        },
      ],
    },
    additionalMetaTags: [
      {
        ...((keywords && {
          name: 'keywords',
          content: keywords.replace(/,/g, ', '),
        }) as any),
      },
    ],
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      <div className='my-10 layout'>
        <CustomLink href='/blog'>
          <span className='flex items-center mb-3 transition-colors text-primary hover:text-primary/70'>
            <IoChevronBackCircleSharp size={30} className='mr-2 ' />
            <span className='border-b-[2px] border-primary/50 border-dotted'>
              Back
            </span>
          </span>
        </CustomLink>
        <CloudinaryImage
          publicId={`sergiobarria/banners/${post.banner}`}
          alt='blog post cover'
          width={1200}
          height={720}
        />
        <h1 className='mt-4'>{post.title}</h1>
        <div className='flex items-center gap-1 my-4 text-gray-500'>
          <div>
            <span>Written on {formattedDate}</span>
            <span> by Sergio Barria</span>
            {/* <span className="mx-2 text-gray-lighter">|</span> */}
          </div>
        </div>
        <div className='flex items-center space-x-4 text-gray-500 dark:text-gray-300'>
          <div className='flex items-center gap-1'>
            <HiOutlineClock />
            <span>{post.readingTime.text}</span>
            {/* <span className='mx-2 text-gray-lighter'>|</span> */}
          </div>
          <div className='flex items-center gap-1'>
            <HiOutlineEye />
            <ViewCounter slug={post.slug} />
          </div>
        </div>

        {/* Summary */}
        <div className='py-6 my-10 italic border-dashed text-long dark:text-gray-lighter border-y'>
          {post.summary}
        </div>

        {/* Main Content */}
        <section className='section'>
          <article className='prose max-w-[768px] prose-slate dark:prose-invert prose-a:no-underline'>
            {children}
          </article>
        </section>
      </div>
    </>
  );
}
