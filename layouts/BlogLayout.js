import NextImage from 'next/image';
import NextLink from 'next/link';
import Seo from '@/components/utils/Seo';

import { formatDate } from '@/lib/formatDate';
import SectionBtn from '@/components/utils/SectionBtn';
import SocialShare from '@/components/utils/SocialShare';

export default function BlogLayout({ children, post, allPosts }) {
  const currPost = post.id;
  const filteredPosts = allPosts.filter(p => p.id !== currPost).slice(0, 5);

  const title = 'Blog | Sergio Barria';
  const description =
    'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer';
  const { coverImage } = post;
  const formattedDate = formatDate(post.originallyPublishedOn);

  return (
    <>
      <Seo
        title={title}
        description={description}
        slug={`blog/${post.slug}`}
        coverImage={`https://www.sergiobarria.com${coverImage.url}`}
      />
      <section className="max-w-3xl px-4 mx-auto my-10">
        <h2 className="mb-4 text-3xl font-bold tracking-wide text-gray-900 capitalize md:text-5xl">
          {post.title}
        </h2>
        <hr className="border-t border-main-light" />
        <article>
          <div className="my-4 text-sm text-gray-700">
            <h4 className="font-semibold capitalize">
              by: {post.author.replace('_', ' ')}
            </h4>
            <p className="text-gray-500">
              <span>{formattedDate}</span> -
              <span> {post.readingTime.text}</span>
            </p>
          </div>
          <div className="relative w-full h-52 sm:h-72 md:h-80 lg:h-96">
            <NextImage
              src={coverImage.url}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-2 prose dark:prose-dark max-w-none">{children}</div>
        </article>
        <hr className="my-2 border-t border-main-light" />
        <SocialShare url={`https://www.sergiobarria.com/blog/${post.slug}`} />
        <hr className="my-2 border-t border-main-light" />
        <h3 className="text-lg font-bold capitalize md:text-xl lg:text-2xl">
          Other posts you may find interesting
        </h3>
        <div className="space-y-2 md:ml-4">
          {filteredPosts.map((p, index) => (
            <NextLink key={p.id} href={`/blog/${p.slug}`}>
              <p className="py-2 text-sm italic font-light text-gray-600 underline cursor-pointer hover:text-main dark:text-skin-inverted">
                {index + 1}. {p.title.slice(0, 50)}...
              </p>
            </NextLink>
          ))}
        </div>
        <div className="my-16 capitalize">
          <SectionBtn url="/blog" btnClass="btn btn-black">
            Back to blog page
          </SectionBtn>
        </div>
      </section>
    </>
  );
}
