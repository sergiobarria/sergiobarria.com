import NextImage from 'next/image';
import NextLink from 'next/link';

const BlogPostCard = ({ post }) => (
  <article
    key={post.id}
    className="w-3/4 col-span-12 mx-auto overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-md shadow-lg md:col-span-6 md:w-full lg:col-span-4 lg:w-10/12 hover:scale-110"
  >
    <NextLink href={`blog/${post.slug}`}>
      <div className="relative w-full cursor-pointer h-52 md:h-44">
        <NextImage
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </NextLink>

    <div className="flex flex-col p-6 min-h-post-card">
      <NextLink href={`blog/${post.slug}`}>
        <h4 className="mb-4 text-lg font-semibold text-gray-800 cursor-pointer hover:text-main">
          {post.title}
        </h4>
      </NextLink>
      <p className="mb-auto text-sm text-gray-700">
        {post.excerpt.substring(0, 100)}...
      </p>
      <NextLink href={`/blog/${post.slug}`}>
        <a className="mt-auto text-sm font-medium text-main hover:text-main-dark">
          Read More
        </a>
      </NextLink>
    </div>
  </article>
);

export default BlogPostCard;
