import { GetStaticProps } from 'next'

import Container from '@/components/layout/MainContainer'
import Hero from '@/components/home/Hero'
import FeaturedPosts from '@/components/home/FeaturedPosts'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import DeveloperSkills from '@/components/home/DeveloperSkills'
import { addReadTime } from '@/lib/addReadTime'
import { getFeaturedPosts, getFeaturedProjects } from '@/lib/graphcms/queries'
import { IPost, IProject } from '@/types/interfaces'

type Props = {
  featuredPosts: IPost[]
  featuredProjects: IProject[]
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getFeaturedPosts()
  const projects = await getFeaturedProjects()
  // const posts = await getFeaturedPosts();

  const featuredPosts = addReadTime(posts)

  return {
    props: {
      featuredPosts,
      featuredProjects: projects,
    },
    // props: {
    //   projects,
    //   posts: allPosts,
    // },
    // revalidate: 60 * 5,
  }
}

export default function HomePage({ featuredPosts, featuredProjects }: Props) {
  const customMetadata = {
    title: 'Home | Sergio Barria',
  }

  return (
    <Container customMetadata={customMetadata}>
      <Hero />
      <FeaturedPosts featuredPosts={featuredPosts} />
      <FeaturedProjects featuredProjects={featuredProjects} />
      <DeveloperSkills />
    </Container>
  )
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
