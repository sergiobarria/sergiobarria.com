import NextImage from 'next/image';
import NextLink from 'next/link';

const BlogPostCard = ({ post }) => (
  <article
    key={post.id}
    className="w-3/4 col-span-12 mx-auto overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-md shadow-lg md:col-span-6 md:w-full lg:col-span-4 lg:w-10/12 hover:scale-110"
  >
    <div className="relative w-full h-52 md:h-44">
      <NextImage
        src={post.image}
        alt={post.title}
        layout="fill"
        objectFit="cover"
      />
    </div>

    <div className="flex flex-col p-6 min-h-post-card">
      <h4 className="mb-4 text-lg font-semibold text-gray-800">{post.title}</h4>
      <p className="mb-auto text-sm text-gray-700">{post.excerpt}...</p>
      <NextLink href={`/blog/${post.slug}`}>
        <a className="mt-auto text-sm font-medium text-main hover:text-main-dark">
          Read More
        </a>
      </NextLink>
    </div>
  </article>
);

export default BlogPostCard;
