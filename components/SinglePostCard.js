import Link from 'next/link';
import Image from 'next/image';

const SinglePostCard = ({ title, excerpt, slug, tags, image, publishedAt }) => {
  const formatedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <div className="p-3 tracking-wide ">
      <div className="flex">
        <div className="relative hidden w-3/12 md:flex">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col md:ml-5 md:w-9/12">
          <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <div className="w-full">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-green-600 font-light ${
                    index === 0 ? '' : 'ml-3'
                  }`}
                >
                  #{tag}
                </span>
              ))}
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-400">{excerpt}</p>
          <div className="flex items-center justify-between mt-5">
            <h5 className="text-sm text-gray-700 dark:text-gray-400">
              {formatedDate}
            </h5>
            <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
              <a className="text-green-600 hover:text-green-700 dark:hover:text-green-400">
                Read more &rarr;
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostCard;
