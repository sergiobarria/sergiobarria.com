import { getFeaturedProjects, getFeaturedPosts } from '@/lib/graphcms';
// import readingTime from 'reading-time';

import Seo from '@/components/utils/Seo';

import Hero from '@/components/hero/Hero';
import Services from '@/components/services/Services';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import BlogPostPreview from '@/components/blog/FeaturedPosts';
import { addReadTime } from '@/lib/addReadTime';

export async function getStaticProps() {
  const projects = await getFeaturedProjects();
  const posts = await getFeaturedPosts();

  const allPosts = await addReadTime(posts);

  return {
    props: {
      projects,
      posts: allPosts,
    },
    revalidate: 60 * 5,
  };
}

export default function HomePage({ projects, posts }) {
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
      <FeaturedProjects projects={projects} />
      <BlogPostPreview posts={posts} />
    </>
  );
}
