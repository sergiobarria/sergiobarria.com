import { GetStaticProps } from 'next'

import Container from '@/components/layout/MainContainer'
import Hero from '@/components/home/Hero'
import FeaturedPosts from '@/components/misc/FeaturedPosts'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import DeveloperSkills from '@/components/home/DeveloperSkills'
import { addReadTime } from '@/lib/addReadTime'
import { getFeaturedPosts, getFeaturedProjects } from '@/lib/graphcms/queries'
import { IPost, IProject } from '@/types/interfaces'

type Props = {
  featuredPosts: IPost[]
  featuredProjects: IProject[]
}
// TODO: Add revalidate
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getFeaturedPosts()
  const projects = await getFeaturedProjects()

  const featuredPosts = addReadTime(posts)

  return {
    props: {
      featuredPosts,
      featuredProjects: projects,
    },
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
