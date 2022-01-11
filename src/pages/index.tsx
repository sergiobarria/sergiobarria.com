import { GetStaticProps } from 'next'

import { client } from '@/lib/urql/client'

import MainLayout from '@/components/layout/MainLayout'
import Hero from '@/components/home/Hero'
import FeaturedPosts from '@/components/misc/FeaturedPosts'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import DeveloperSkills from '@/components/home/DeveloperSkills'
import { getAllPosts, getFeaturedProjects } from 'src/lib/graphcms/queries'
import { IPost } from '@/types/PostTypes'
import { IProject } from '@/types/ProjectTypes'

interface IProps {
  posts: IPost[]
  projects: IProject[]
}

export const getStaticProps: GetStaticProps = async () => {
  const postsQuery = getAllPosts()
  const projectsQuery = getFeaturedProjects()

  const {
    data: { posts },
  } = await client?.query(postsQuery).toPromise()
  const {
    data: { projects },
  } = await client?.query(projectsQuery).toPromise()

  const featuredPosts = posts.filter((post: IPost) => post.isFeatured)
  const featuredProjects = projects.filter(
    (project: IProject) => project.isFeatured
  )

  return {
    props: {
      posts: featuredPosts,
      projects: featuredProjects,
    },
    revalidate: 60 * 10, // 10 min
  }
}

export default function HomePage({ posts, projects }: IProps) {
  const customMetadata = {
    url: 'https://sergiobarria.com/',
    title: 'Home | Sergio Barria',
    description:
      'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer',
  }

  return (
    <MainLayout customMetadata={customMetadata}>
      <Hero />
      <FeaturedPosts featuredPosts={posts} />
      <FeaturedProjects featuredProjects={projects} />
      <DeveloperSkills />
    </MainLayout>
  )
}
