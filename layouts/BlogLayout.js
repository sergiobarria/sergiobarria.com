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
        <h1 className="pb-6 text-3xl font-bold leading-10 tracking-wider border-b text-skin-title md:my-10 md:text-5xl dark:text-gray-100">
          {frontMatter.title}
        </h1>
      </header>
      <article>
        <div className="max-w-5xl gap-2 md:grid md:grid-cols-4">
          <div className="my-4 md:col-span-3">
            <div>
              <NextImage src={frontMatter.image} width={668} height={400} />
            </div>
            <div className="p-2 prose dark:prose-dark max-w-none">
              {children}
            </div>
            <div className="flex justify-between w-full px-2">
              <div className="w-5/12 h-40 cursor-pointer">
                <NextLink href={`${prevPost ? prevPost.slug : ''}`}>
                  <div className="p-2 my-6 text-sm border rounded-md shadow text-skin-accent h-28 ">
                    <p>&larr; Prev</p>
                    <hr className="my-2" />
                    <p>{prevPost.title}</p>
                  </div>
                </NextLink>
              </div>
              {nextPost && (
                <div className="w-5/12 h-40 cursor-pointer ">
                  <NextLink href={`${nextPost ? nextPost.slug : ''}`}>
                    <div className="p-2 my-6 text-sm border rounded-md shadow text-skin-accent h-28">
                      <p className="text-right">&rarr; Next</p>
                      <hr className="my-2" />
                      <p className="text-right">{nextPost.title}</p>
                    </div>
                  </NextLink>
                </div>
              )}
            </div>
          </div>
          <div className="p-2 text-sm border-t divide-y text-skin-title md:border-none max-h-96 md:col-span-1">
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-skin-title dark:text-skin-inverted">
                AUTHOR
              </h3>
              <h4 className="pb-2 dark:text-skin-base">
                By: {frontMatter.author}
              </h4>
              <a
                href="https://www.sanity.io"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-skin-accent hover:text-skin-accent"
              >
                @sergioBarria01
              </a>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-skin-title dark:text-skin-inverted">
                TAGS
              </h3>
              <div className="flex flex-wrap">
                {frontMatter.tags.map((tag, index) => (
                  <p key={index} className="mr-2 italic text-skin-accent">
                    #{tag}
                  </p>
                ))}
              </div>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-skin-title dark:text-skin-title">
                CATEGORIES
              </h3>
              <p className="pb-2 dark:text-skin-base">{frontMatter.category}</p>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-skin-title dark:text-skin-title">
                PUBLISHED ON
              </h3>
              <time className="pb-2 dark:text-skin-base">{formatedDate}</time>
            </div>
            <div className="py-2">
              <h3 className="pb-2 font-semibold text-skin-title dark:text-skin-inverted">
                READING TIME
              </h3>
              <p className="pb-2 dark:text-skin-base">
                {frontMatter.readingTime.text}
              </p>
            </div>
            <div className="py-2">
              <NextLink href="/blog">
                <a className="text-skin-accent hover:text-skin-accent">
                  &larr; Back to the blog page
                </a>
              </NextLink>
            </div>

            {/* Latest posts list */}
            <div className="my-24">
              <h3 className="py-2 text-base font-normal text-skin-accent dark:text-skin-accent">
                Other posts that you may be interested
              </h3>
              <div className="divide-y divide-dashed">
                {filteredPosts.map((post, index) => (
                  <p
                    key={post.id}
                    className="py-2 text-sm italic font-light dark:text-skin-inverted"
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
