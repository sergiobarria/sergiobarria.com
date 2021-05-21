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
        <h2 className="pb-6 text-3xl font-bold leading-10 tracking-wider border-b md:my-10 md:text-5xl">
          {frontMatter.title}
        </h2>
      </header>
      <article>
        <div className="w-full max-w-5xl gap-2 md:grid md:grid-cols-4">
          <div className="md:col-span-3">
            <div>
              <NextImage src={frontMatter.image} width={768} height={400} />
            </div>
            <div className="w-full p-2 prose dark:prose-dark max-w-none selection:bg-yellow-300">
              {children}
            </div>
          </div>
          <div className="p-2 text-sm text-gray-700 divide-y max-h-96 md:col-span-1">
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-gray-900">AUTHOR</h3>
              <h4 className="pb-2">By: {frontMatter.author}</h4>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-gray-900">TAGS</h3>
              <div className="flex flex-wrap">
                {frontMatter.tags.map((tag, index) => (
                  <p key={index} className="mr-2 italic text-green-500">
                    #{tag}
                  </p>
                ))}
              </div>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-gray-900">CATEGORIES</h3>
              <time className="pb-2">{frontMatter.category}</time>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-gray-900">PUBLISHED ON</h3>
              <time className="pb-2">{formatedDate}</time>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-gray-900">READING TIME</h3>
              <time className="pb-2">{frontMatter.readingTime.text}</time>
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
