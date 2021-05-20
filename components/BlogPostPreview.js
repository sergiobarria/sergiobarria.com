import Link from 'next/link';

const BlogPostPreview = ({ title, excerpt, slug, tags }) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a className="w-full">
          <div className="w-full mb-6">
            <div className="flex flex-col justify-between md:flex-row">
              <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                {title}
              </h4>
              <p>{tags}</p>
              {/* <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {`${views ? format(views) : '–––'} views`}
            </p> */}
            </div>
            <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
          </div>
        </a>
      </Link>
      <div className="flex justify-end">
        <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
          <a className="text-green-500 hover:text-green-600 dark:hover:text-green-400">
            Read more &rarr;
          </a>
        </Link>
      </div>
    </>
  );
};

export default BlogPostPreview;
