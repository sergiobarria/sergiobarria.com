import { getAllFilesFrontMatter } from '@/lib/mdx';

import Seo from '@/components/utils/Seo';

import Hero from '@/components/hero/Hero';
import Services from '@/components/services/Services';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import BlogPostPreview from '@/components/blog/FeaturedPosts';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return {
    props: {
      posts,
    },
  };
}

export default function HomePage({ posts }) {
  const latestPosts = posts.allFiles.slice(0, 3);

  const title = 'Home | Sergio Barria';
  const description =
    'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer';

  return (
    <>
      <Seo
        title={title}
        description={description}
        slug="/"
        // coverImage={`https://www.sergiobarria.com${image}`}
      />
      <Hero />
      <Services />
      <FeaturedProjects />
      <BlogPostPreview posts={latestPosts} />
    </>
  );
}
