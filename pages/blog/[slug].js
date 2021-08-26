import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import { NextSeo } from 'next-seo';

import BlogLayout from '@/layouts/BlogLayout';
import { getAllSlug, getPostBySlug } from '@/lib/graphcms';
import { slugPage } from '@/data/pagesData';

export async function getStaticPaths() {
  const data = await getAllSlug();

  return {
    paths: data.map(slug => ({
      params: {
        ...slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const { post, posts } = await getPostBySlug(slug);

  const source = await serialize(post.body.markdown);

  return {
    props: {
      post: {
        ...post,
        readingTime: readingTime(post.body.markdown),
      },
      allPosts: posts,
      source,
    },
    revalidate: 60 * 5,
  };
}

const SingleBlogPost = ({ post, allPosts, source }) => {
  const { url, title, keywords: defaultKeywords, description } = slugPage;
  const fullUrl = `${url}/${post.slug}`;
  const { keywords } = post.otherContent;
  const orderedKeywords = keywords.join(', ');

  return (
    <>
      <NextSeo
        title={title}
        description={post.excerpt || description}
        canonical={fullUrl}
        openGraph={{
          url: fullUrl,
          title,
          description: post.excerpt || description,
          images: [{ url: post.coverImage.url }],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: `${defaultKeywords}, ${orderedKeywords}`,
          },
        ]}
      />
      <BlogLayout post={post} allPosts={allPosts}>
        <MDXRemote {...source} />
      </BlogLayout>
    </>
  );
};

export default SingleBlogPost;
