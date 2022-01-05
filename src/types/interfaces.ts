import { ReactNode } from 'react'

export type ReadingTimeResult = {
  text: string
  minutes: number
  time: number
  words: number
}

export interface IPropsWithChildren {
  children?: ReactNode
}

export interface IPostCardPreview {
  postTitle: string
  postSummary: string
  postSlug: string
  publishedDate: string
  readTime?: string
}

export interface ICustomMetadata {
  title?: string
  description?: string
  image?: string
  date?: string
  type?: string
}

export interface IPost {
  id: string
  title: string
  slug: string
  excerpt: string
  originallyPublishedOn: string
  createdAt?: string
  publishedAt?: string
  coverImage?: {
    url: string
  }
  body?: {
    markdown: string
  }
  readTime?: string | undefined
}

export interface IProject {
  id: string
  projectName: string
  description: string
  liveUrl: string
  repositoryUrl: string
  techStack: string[]
  coverImage: {
    url: string
  }
  mainTechnology?: string
}

// export interface IPost {
//   featuredPosts: Post[]
// }
