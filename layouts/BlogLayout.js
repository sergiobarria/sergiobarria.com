import NextImage from 'next/image';
import NextLink from 'next/link';

import Container from '@/components/Container';

export default function BlogLayout({ children, frontMatter, allPosts }) {
  const currPost = frontMatter.id;
  const prevPost =
    allPosts.allFiles.filter(p => p.id === currPost - 1)[0] || null;
  const nextPost =
    allPosts.allFiles.filter(p => p.id === currPost + 1)[0] || null;
  const filteredPosts = allPosts.allFiles
    .filter(p => p.id !== currPost)
    .slice(0, 5);
  // console.log(frontMatter, allPosts, prevPost, nextPost);

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
            <div className="flex justify-between w-full px-2">
              <div className="w-5/12 h-40 cursor-pointer">
                <NextLink href={`${prevPost ? prevPost.slug : ''}`}>
                  <div className="p-2 my-6 text-sm text-green-500 border rounded-md shadow h-28 ">
                    <p>&larr; Prev</p>
                    <hr className="my-2" />
                    <p>{prevPost.title}</p>
                  </div>
                </NextLink>
              </div>
              {nextPost && (
                <div className="w-5/12 h-40 cursor-pointer ">
                  <NextLink href={`${nextPost ? nextPost.slug : ''}`}>
                    <div className="p-2 my-6 text-sm text-green-500 border rounded-md shadow h-28">
                      <p className="text-right">&rarr; Next</p>
                      <hr className="my-2" />
                      <p className="text-right">{nextPost.title}</p>
                    </div>
                  </NextLink>
                </div>
              )}
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
              <a
                href="https://www.sanity.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline hover:text-green-500"
              >
                @sergioBarria01
              </a>
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
            <div className="py-2">
              <NextLink href="/blog">
                <a className="text-green-500 hover:text-green-600">
                  &larr; Back to the blog page
                </a>
              </NextLink>
            </div>

            {/* Latest posts list */}
            <div className="my-24">
              <h3 className="py-2 text-base font-normal text-green-500 dark:text-green-500">
                Other posts that you may be interested
              </h3>
              <div className="divide-y divide-dashed">
                {filteredPosts.map((post, index) => (
                  <p
                    key={post.id}
                    className="py-2 text-sm italic font-light dark:text-gray-100"
                  >
                    {index + 1}. {post.title.slice(0, 50)}...
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}

// &larr; Back to the blog
