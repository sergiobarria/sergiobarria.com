import { PropsWithChildren } from 'react';

import { NextSeo } from 'next-seo';

import { Post } from 'contentlayer/generated';
import { format } from 'date-fns';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';

import { Section } from '@/components/base';
import { PageContainer } from '@/components/base';
import CloudinaryImage from '@/components/CloudinaryImage';
import ReturnLink from '@/components/links/ReturnLink';
import TextBodyContainer from '@/components/TextBodyContainer';
import ViewCounter from '@/components/ViewCounter';

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

      <PageContainer>
        <ReturnLink href='/blog' />
        <CloudinaryImage
          publicId={`sergiobarria/banners/${post.banner}`}
          alt='blog post cover'
          width={1200}
          height={720}
        />
        <h1 className='mt-4'>{post.title}</h1>
        <div className='my-4 flex items-center gap-1 text-gray-500'>
          <div>
            <span>Written on {formattedDate}</span>
            <span> by Sergio Barria</span>
          </div>
        </div>
        <div className='flex items-center space-x-4 text-gray-500 dark:text-gray-300'>
          <div className='flex items-center gap-1'>
            <HiOutlineClock />
            <span>{post.readingTime.text}</span>
          </div>
          <div className='flex items-center gap-1'>
            <HiOutlineEye />
            <ViewCounter slug={post.slug} />
          </div>
        </div>

        {/* Summary */}
        <Section className='mt-6 border-y border-double py-6 italic dark:text-gray-300'>
          <p className='text-gray-600 dark:text-gray-200'>
            <span className='uppercase text-primary dark:text-primary'>
              Quick Summary ↬{' '}
            </span>
            {post.summary}
          </p>
        </Section>

        {/* Main Content */}
        <Section>
          <TextBodyContainer>{children}</TextBodyContainer>
        </Section>
      </PageContainer>
    </>
  );
}
