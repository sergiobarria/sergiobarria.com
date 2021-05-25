import NextLink from 'next/link';
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
          <NextLink href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
            <h4 className="mb-2 text-xl font-semibold cursor-pointer text-skin-title dark:text-skin-inverted dark:hover:text-skin-accent hover:text-skin-accent">
              {title}
            </h4>
          </NextLink>
          <div className="flex flex-wrap w-full">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-skin-accent font-light ${
                    index === 0 ? '' : 'ml-2'
                  }`}
                >
                  #{tag}
                </span>
              ))}
          </div>
          <p className="mt-2 text-sm text-skin-base dark:text-skin-inverted">
            {excerpt}
          </p>
          <div className="flex items-center justify-between mt-5">
            <time className="text-sm text-skin-base dark:text-skin-muted">
              {formatedDate}
            </time>
            <NextLink href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
              <a className="text-skin-accent hover:text-skin-button-accent-hover dark:hover:text-skin-400">
                Read more &rarr;
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostCard;
