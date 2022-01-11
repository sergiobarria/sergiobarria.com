import { GetStaticProps } from 'next'

import { client } from '@/lib/urql/client'

import MainLayout from '@/components/layout/MainLayout'
import Hero from '@/components/home/Hero'
import FeaturedPosts from '@/components/misc/FeaturedPosts'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import DeveloperSkills from '@/components/home/DeveloperSkills'
import { addReadTime } from 'src/lib/addReadTime'
import { getFeaturedPosts, getFeaturedProjects } from 'src/lib/graphcms/queries'
import { IPost } from '@/types/PostTypes'
import { IProject } from '@/types/ProjectTypes'

interface IProps {
  posts: IPost[]
  projects: IProject[]
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredPostsQuery = getFeaturedPosts()
  const featuredProjectsQuery = getFeaturedProjects()

  const {
    data: { posts },
  } = await client?.query(featuredPostsQuery).toPromise()
  const {
    data: { projects },
  } = await client?.query(featuredProjectsQuery).toPromise()

  return {
    props: {
      posts,
      projects,
    },
    revalidate: 60 * 10, // 10 min
  }
}

export default function HomePage({ posts, projects }: IProps) {
  const featuredPosts = addReadTime(posts)

  const customMetadata = {
    url: 'https://sergiobarria.com/',
    title: 'Home | Sergio Barria',
    description:
      'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer',
  }

  return (
    <MainLayout customMetadata={customMetadata}>
      <Hero />
      <FeaturedPosts featuredPosts={featuredPosts} />
      <FeaturedProjects featuredProjects={projects} />
      <DeveloperSkills />
    </MainLayout>
  )
}
