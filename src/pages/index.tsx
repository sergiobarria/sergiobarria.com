export default function HomePage() {
  return <div>Hello World, from the homepage</div>
}

// import { getFeaturedProjects, getFeaturedPosts } from '@/lib/graphcms';
// import { NextSeo } from 'next-seo';

// // import Seo from '@/components/utils/Seo';
// import Hero from '@/components/hero/Hero';
// import Services from '@/components/services/Services';
// import FeaturedProjects from '@/components/projects/FeaturedProjects';
// import BlogPostPreview from '@/components/blog/FeaturedPosts';
// import { addReadTime } from '@/lib/addReadTime';
// import { homePage } from '@/data/pagesData';

// export async function getStaticProps() {
//   const projects = await getFeaturedProjects();
//   const posts = await getFeaturedPosts();

//   const allPosts = await addReadTime(posts);

//   return {
//     props: {
//       projects,
//       posts: allPosts,
//     },
//     revalidate: 60 * 5,
//   };
// }

// export default function HomePage({ projects, posts }) {
//   const { url, title, description, keywords } = homePage;

//   return (
//     <>
//       <NextSeo
//         title={title}
//         description={description}
//         canonical={url}
//         openGraph={{ url, title, description }}
//         additionalMetaTags={[
//           {
//             name: 'keywords',
//             content: keywords,
//           },
//         ]}
//       />
//       <Hero />
//       <Services />
//       <FeaturedProjects projects={projects} />
//       <BlogPostPreview posts={posts} />
//     </>
//   );
// }
