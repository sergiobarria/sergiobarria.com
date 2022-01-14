import { InferGetStaticPropsType } from 'next'

// import { client } from '@/lib/urql/client'
import Layout from '@/components/layout/Layout'
import BlogPostCard from '@/components/misc/BlogPostCard'
import CurrentGoals from '@/components/misc/CurrentGoals'

// import Hero from '@/components/home/Hero'
// import FeaturedPosts from '@/components/misc/FeaturedPosts'
// import FeaturedProjects from '@/components/home/FeaturedProjects'
// import DeveloperSkills from '@/components/home/DeveloperSkills'
// import { getAllPosts, getFeaturedProjects } from '@/lib/graphcms/queries'
// import { IPost } from '@/types/PostTypes'
// import { IProject } from '@/types/ProjectTypes'
import { allPosts } from '.contentlayer/data'

// interface IProps {
//   featuredPosts: IPost[]
//   projects: IProject[]
// }

export async function getStaticProps() {
  // const posts = await getAllFilesFrontmatter('blog')
  const featuredPosts = allPosts.filter(post => post.isFeatured)
  // console.log(featuredPosts)

  // console.log(posts)
  // const featuredPosts = getFeatured(posts, [
  //   'how-to-make-a-blog-with-next-js-and-sanity-io',
  //   'how-to-add-dynamic-routes-to-next-js-blog-with-sanity-io-content',
  //   'how-to-link-and-display-your-latest-blog-posts-to-your-github-profile',
  // ])

  return {
    props: {
      featuredPosts,
    },
    revalidate: 60 * 10, // 10 min
  }
}

export default function HomePage({
  featuredPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const customMetadata = {
    url: 'https://sergiobarria.com/',
    title: 'Home | Sergio Barria',
    description:
      'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer',
  }

  return (
    <Layout customMetadata={customMetadata}>
      <div className="layout md:my-8">
        {/* Hero */}
        <section className="w-full md:w-10/12">
          <h1 className="mb-3">Hi, I&apos;m Sergio</h1>
          <p className="text-lg text-gray-lighter dark:text-gray-lighter">
            Web Developer
          </p>
          <p className="text-lg text-gray-regular dark:text-gray-light">
            I work with the JavaScript ecosystem. Welcome to my small piece of
            the internet, where I write and share about different topics related
            to the tech industry and life style.
          </p>
        </section>
      </div>

      {/* Featured Posts */}
      <section className="section">
        <div className="layout">
          <h2 className="mb-6">Featured Posts</h2>
          {featuredPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="layout">
          <h2 className="mb-6">Featured Projects</h2>
        </div>
      </section>

      {/* Current Goals */}
      <section className="section">
        <div className="layout">
          <h2 className="mb-2">What I'm up to right now</h2>
          <CurrentGoals />
        </div>
      </section>

      {/* 
      <FeaturedPosts featuredPosts={featuredPosts} />
      <FeaturedProjects featuredProjects={projects} />
      <DeveloperSkills /> */}
    </Layout>
  )
}
