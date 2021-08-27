import NextImage from 'next/image';
import NextLink from 'next/link';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import { formatDate } from '@/lib/formatDate';

const BlogPostCard = ({ post }) => {
  const { data } = useSWR(`/api/views/${post.slug}`, fetcher);
  const views = data?.total;
  // console.log(views);

  const publishedDate =
    post.originallyPublishedOn < post.publishedAt
      ? post.originallyPublishedOn
      : post.publishedAt;

  const formattedDate = formatDate(publishedDate);

  return (
    <NextLink href={`blog/${post.slug}`}>
      <article key={post.id} className="post-card">
        <div className="relative w-full h-40 sm:h-52 md:h-44">
          <NextImage
            src={post.coverImage.url}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col flex-1 p-4 lg:p-6">
          <h4 className="mb-3 text-lg font-semibold text-gray-800 cursor-pointer md:text-xl lg:text-2xl hover:text-main">
            {post.title.substring(0, 45)}...
          </h4>
          <p className="mb-4 text-sm text-gray-700 md:text-base">
            {post.excerpt.substring(0, 100)}...
          </p>
          <div className="flex items-center justify-between mt-auto text-gray-500">
            <p className="text-xs md:text-sm">
              {formattedDate} - <span>{post.readingTime.text}</span>
            </p>
            {views > 100 && <small>{views} views</small>}
          </div>
        </div>
      </article>
    </NextLink>
  );
};

export default BlogPostCard;
