import { gql } from '@apollo/client'
import { client } from './apolloClient'
import {
  getFeaturedProjects,
  getFeaturedPosts,
  getAboutContent,
  getAllPosts,
  getAllProjects,
  // getAllResources,
  getAllSlug,
  getPostBySlug,
} from './queries'

export {
  client,
  gql,
  getFeaturedProjects,
  getFeaturedPosts,
  getAboutContent,
  getAllPosts,
  getAllProjects,
  // getAllResources,
  getAllSlug,
  getPostBySlug,
}
