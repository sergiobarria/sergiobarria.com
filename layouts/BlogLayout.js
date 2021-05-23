import NextImage from 'next/image';

import Container from '@/components/Container';

export default function BlogLayout({ children, frontMatter }) {
  // console.log(frontMatter);

  const formatedDate = new Date(frontMatter.publishedAt).toLocaleDateString(
    'en-US',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );

  return (
    <Container>
      <header>
        <h1 className="pb-6 text-3xl font-bold leading-10 tracking-wider text-gray-800 border-b md:my-10 md:text-5xl dark:text-gray-100">
          {frontMatter.title}
        </h1>
      </header>
      <article>
        <div className="max-w-5xl gap-2 md:grid md:grid-cols-4">
          <div className="my-4 md:col-span-3">
            <div>
              <NextImage src={frontMatter.image} width={668} height={400} />
            </div>
            <div className="p-2 prose dark:prose-dark max-w-none selection:bg-yellow-300">
              {children}
            </div>
          </div>
          <div className="p-2 text-sm text-gray-700 border-t divide-y md:border-none max-h-96 md:col-span-1">
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-gray-900 dark:text-gray-100">
                AUTHOR
              </h3>
              <h4 className="pb-2 dark:text-gray-400">
                By: {frontMatter.author}
              </h4>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-gray-900 dark:text-gray-100">
                TAGS
              </h3>
              <div className="flex flex-wrap">
                {frontMatter.tags.map((tag, index) => (
                  <p key={index} className="mr-2 italic text-green-500">
                    #{tag}
                  </p>
                ))}
              </div>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-gray-900 dark:text-gray-100">
                CATEGORIES
              </h3>
              <time className="pb-2 dark:text-gray-400">
                {frontMatter.category}
              </time>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-gray-900 dark:text-gray-100">
                PUBLISHED ON
              </h3>
              <time className="pb-2 dark:text-gray-400">{formatedDate}</time>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-gray-900 dark:text-gray-100">
                READING TIME
              </h3>
              <p className="pb-2 dark:text-gray-400">
                {frontMatter.readingTime.text}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}

/* <div className="flex justify-between w-full mt-2 md:items-center">
            <div className="flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-200">
            by: {frontMatter.author}
            </p>
            </div>
            <p className="text-sm text-gray-700 min-w-32 md:mt-0 dark:text-gray-200">
            {frontMatter.readingTime.text} {` • `} {formatedDate}
            </p>
          </div> */
