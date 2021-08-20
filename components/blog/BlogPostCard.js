import NextImage from 'next/image';
import NextLink from 'next/link';

const BlogPostCard = ({ post }) => (
  <article
    key={post.id}
    className="w-full col-span-12 mx-auto overflow-hidden bg-white rounded-md md:w-8/12 lg:col-span-4 lg:w-full xl:w-11/12"
  >
    <div className="relative w-full h-52">
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
      <NextLink href={`/posts/${post.slug}`}>
        <a className="mt-auto text-sm font-medium text-gray-700 hover:text-main">
          Read More
        </a>
      </NextLink>
    </div>
  </article>
);

export default BlogPostCard;
