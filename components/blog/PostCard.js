import NextImage from 'next/image';
import NextLink from 'next/link';

const BlogPostCard = ({ post }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <NextLink href={`blog/${post.slug}`}>
      <article key={post.id} className="post-card">
        <div className="relative w-full h-40 sm:h-52 md:h-44">
          <NextImage
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col flex-1 p-3 lg:p-6">
          <h4 className="mb-3 text-lg font-semibold text-gray-800 cursor-pointer md:text-xl lg:text-2xl hover:text-main">
            {post.title.substring(0, 45)}...
          </h4>
          <p className="mb-4 text-sm text-gray-700 md:text-base">
            {post.excerpt.substring(0, 100)}...
          </p>
          <p className="mt-auto text-xs text-gray-500 md:text-sm">
            Published on: {formattedDate}
          </p>
        </div>
      </article>
    </NextLink>
  );
};

export default BlogPostCard;
